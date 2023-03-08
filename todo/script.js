const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')

todoBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', removeTodo)


function addTodo(e) {
  e.preventDefault()

  todoList.innerHTML += `
    <div class='todo'>
      <li class='todo-item'>${todoInput.value}</li>
      <button class='complete-btn'>
        <i class='fas fa-check'></i>
      </button>
      <button class='remove-btn'>
      <i class='fas fa-trash'></i>
    </button>
    </div>
  `
  todoInput.value = ''
}

function removeTodo(e) {
  const item = e.target
  console.log(item)
  if (item.classList[0] === 'remove-btn') {
    const todo = item.parentElement
    todo.remove()
  }
}