const addItemBtn = document.querySelector('.add-item-btn')
const itemInput = document.querySelector('.item-input')
const list = document.querySelector('.list')

const shoppingList = []

addItemBtn.addEventListener('click', function () {
  if (shoppingList.includes(itemInput.value)) {
    console.log('no duplicates')
  } else {
    shoppingList.push(itemInput.value)
    render()
  }
  itemInput.value = ''
})

function render() {
  let html = ''
  for (let item of shoppingList) {
    html += `<div class='list-items-container'>
    <li class="list-item">${item}</li>
    <button class-'remove-btn'>X</button>
    </div>`
  }
  list.innerHTML = html
}

render()
