const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

todoBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', removeTodo)
todoInput.addEventListener('keyup', checkInput)
filterOption.addEventListener('click', filterTodo)

function checkInput(e) {
  if (e.target.value.length > 0) {
    todoBtn.classList.remove('disabled')
    todoBtn.disabled = false
  } else {
    todoBtn.classList.add('disabled')
    todoBtn.disabled = true
  }
}

function addTodo(e) {
  e.preventDefault()

  if (todoInput.value) {
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
    todoBtn.classList.add('disabled')
    todoBtn.disabled = true
  }
}

function removeTodo(e) {
  const item = e.target
  console.log(item)
  if (item.classList[0] === 'remove-btn') {
    const todo = item.parentElement
    todo.classList.add('fall')
    todo.addEventListener('transitionend', () => {
      todo.remove()
    })
  }

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        return todo.style.display = 'flex'

      case 'completed':
        if (todo.classList.contains('completed')) {
          return todo.style.display = 'flex'
        } else {
          return todo.style.display = 'none'
        }
    }
  })
}
