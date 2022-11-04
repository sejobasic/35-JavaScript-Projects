import { menuArray } from './data.js'

const contentContainer = document.querySelector('.content-container')
const menuSection = document.querySelector('.menu-section')
const checkoutContainer = document.querySelector('.checkout-container')
const totalPrice = document.querySelector('.total-price')
const modal = document.querySelector('.modal-container')
const orderBtn = document.querySelector('.complete')
const form = document.querySelector('.modal-form')

const orders = []

// Listen for add, remove and complete order buttons
document.addEventListener('click', (e) => {
  let target = e.target.dataset

  if (target.add) {
    addItem(target.add)
  } else if (target.remove) {
    removeItem(target.remove)
  } else if (target.complete) {
    completeOrder()
  } else if (target.close) {
    closeModal()
  }
})

// Form event
form.addEventListener('submit', (e) => {
  e.preventDefault()
  handleSubmit()
  orderedItems()
})

// Iterate through data and render main food items inside menu section
function renderFoodItems() {
  let menuHtml = ``

  menuArray.forEach((item) => {
    menuHtml += `
        <div class="food-item-container">
          <img src="${item.image}" alt="cheeseburger icon" />
          <div class="food-details">
            <h3>${item.name}</h3>
            <p class="item-ingredients">
              ${item.ingredients.join(', ')}
            </p>
            <p class="item-price">$${item.price}</p>
          </div>
          <button class='add-item-btn' data-add='${item.id}'>+</button>
        </div>`
  })
  menuSection.innerHTML = menuHtml
}

// Add item to order
function addItem(itemId) {
  const orderedItemObj = menuArray.find((item) => {
    return item.id === itemId
  })
  orders.push(orderedItemObj)

  orderBtn.removeAttribute('disabled')
  orderBtn.style.cursor = 'pointer'

  renderCheckout()
}

// Calculate total cost of order
function calculateTotal() {
  let sum = 0
  orders.forEach((order) => {
    return (sum += order.price)
  })
  totalPrice.textContent = `$${sum}`
}

function renderCheckout() {
  let ordersHtml = ``
  orders.forEach((order) => {
    ordersHtml += `
    <div class="checkout-item">
      <h3>
        ${order.name}<button class="remove-item" data-remove='${order.id}'>remove</button>
      </h3>
      <p class="item-price">$${order.price}</p>
    </div>`
  })
  if (orders.length < 1) {
    orderBtn.setAttribute('disabled', true)
    orderBtn.style.cursor = 'default'
  }
  checkoutContainer.innerHTML = ordersHtml
  calculateTotal()
}

// Remove single item from order based on target id
function removeItem(itemId) {
  const targetOrder = orders.map((order) => order.id).indexOf(itemId)
  orders.splice(targetOrder, 1)

  renderCheckout()
}

function completeOrder() {
  // Only show modal if order is not empty
  if (orders.length > 0) {
    modal.style.display = 'block'
    orderBtn.setAttribute('disabled', true)
    orderBtn.style.cursor = 'default'
    contentContainer.classList.add('blurred')
  }
}

// Handle form submit
function handleSubmit() {
  modal.style.display = 'none'
  contentContainer.classList.remove('blurred')
  document.querySelector('.checkout-section').style.display = 'none'
  document.querySelector('.confirmation-modal').style.display = 'block'
}

// Render ordered items list
function orderedItems() {
  const orderedList = document.querySelector('.ordered-list')

  let ordersHtml = ``

  orders.forEach((order) => {
    ordersHtml += `
      <ul>
        <li>${order.name}</li>
      </ul>
  `
  })
  menuSection.style.display = 'none'
  orderedList.style.display = 'flex'
  orderedList.innerHTML += ordersHtml
}

// Close modal and toggle ui
function closeModal() {
  modal.style.display = 'none'
  orderBtn.removeAttribute('disabled')
  orderBtn.style.cursor = 'pointer'
  contentContainer.classList.remove('blurred')
}

renderFoodItems()
