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
    html += `<li class="list-item">${item}</li>`
  }
  list.innerHTML = html
}

render()
