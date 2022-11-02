import { menuArray } from './data.js'

const contentContainer = document.querySelector('.content-container')
const checkoutContainer = document.querySelector('.checkout-container')

// Iterate through data and render main food items inside content container

function renderFoodItems() {
  let menuHtml = ``

  menuArray.forEach((item) => {
    menuHtml += `
      <section class="menu-section">
        <div class="food-item-container">
          <img src="${item.image}" alt="cheeseburger icon" />
          <div class="food-details">
            <h3>${item.name}</h3>
            <p class="item-ingredients">
              ${item.ingredients.join(', ')}
            </p>
            <p class="item-price">$${item.price}</p>
          </div>
          <button>+</button>
        </div>
      </section>`
  })

  contentContainer.innerHTML = menuHtml
}

renderFoodItems()

