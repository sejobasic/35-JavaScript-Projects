const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


// Add and remove class on click
open.addEventListener('click', () => {
  container.classList.add('show-nav')
})

close.addEventListener('click', () => {
  container.classList.remove('show-nav')
})
