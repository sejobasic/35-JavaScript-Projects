const addItemBtn = document.querySelector('.add-item-btn')
const itemInput = document.querySelector('.item-input')
const list = document.querySelector('.list')

let shoppingList = []

addItemBtn.addEventListener('click', function () {
  
  shoppingList.push(itemInput.value)
  render()
  itemInput.value = ''
})

function render() {
  let html = []
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

list.addEventListener('click', (e) => {
  document.getElementById(e.target.id).parentElement.remove()
  shoppingList.forEach(item => item !== e.target.id)
  // shoppingList = []
})

render()
