const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const header = document.querySelector('.header')

openBtn.addEventListener('click', () => {
  nav.forEach(navEl => navEl.classList.add('visible'))
  header.classList.add('visible')
})

closeBtn.addEventListener('click', () => {
  nav.forEach(navEl => navEl.classList.remove('visible'))
  header.classList.remove('visible')
})