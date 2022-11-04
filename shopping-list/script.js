const addItemBtn = document.querySelector('.add-item-btn')
const itemInput = document.querySelector('.item-input')
const list = document.querySelector('.list')

let shoppingList = []

if (localStorage.getItem('list')) {
  shoppingList = JSON.parse(localStorage.getItem('list'))
}

// Only push into array if value is greater than 1
addItemBtn.addEventListener('click', function () {
  if (itemInput.value.length > 1) {
    shoppingList.push(itemInput.value)
    render()
    saveToStorage()
    itemInput.value = ''
  }
})

function render() {
  let html = ``
  for (let item of shoppingList) {
    html += `
    <div class='list-item-container'>
    <li class="list-item" id=${item}>${item}</li>
    <button class='remove-btn' id=${item}>X</button>
    </div>
    `
  }
  list.innerHTML = html
}

function saveToStorage() {
  localStorage.setItem('list', JSON.stringify(shoppingList))
}

list.addEventListener('click', (e) => {
  document.getElementById(e.target.id).parentElement.remove()
  const targetItem = shoppingList.map((item) => item.id).indexOf(e.target.id)
  shoppingList.splice(targetItem, 1)
  saveToStorage()
})

render()
