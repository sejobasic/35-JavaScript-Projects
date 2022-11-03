import { menuArray } from './data.js'

const menuSection = document.querySelector('.menu-section')
const checkoutContainer = document.querySelector('.checkout-container')
const totalPrice = document.querySelector('.total-price')

const orders = []
// Listen for add and complete order buttons
document.addEventListener('click', (e) => {
  if (e.target.dataset.add) {
    addItem(e.target.dataset.add)
  }
  if (e.target.dataset.remove) {
    removeItem(e.target.dataset.remove)
  }
})

// Iterate through data and render main food items inside content container
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
          <button class='add-item-btn' data-add=${item.id}>+</button>
        </div>`
  })
  menuSection.innerHTML = menuHtml
}

// Add item to order
function addItem(itemId) {
  const orderedItemObj = menuArray.filter((item) => {
    return item.id === itemId
  })[0]
  orders.push(orderedItemObj)

  renderCheckout()
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
  checkoutContainer.innerHTML = ordersHtml
  calculateTotal()
}

function calculateTotal() {
  let sum = 0
  orders.forEach((order) => {
    return (sum += order.price)
  })
  totalPrice.textContent = `$${sum}`
}

function removeItem(itemId) {
  const targetOrder = orders.map((order) => order.id).indexOf(itemId)
  orders.splice(targetOrder, 1)
  renderCheckout()
}

renderFoodItems()
