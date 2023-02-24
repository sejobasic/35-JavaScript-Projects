const menu = document.querySelector('.burger-menu')
const closeMenu = document.querySelector('.close-menu')
const nav = document.querySelector('.nav-links')

menu.addEventListener('click', () => {
  nav.style.transform = 'translate(-100%)'
  menu.style.display = 'none'
  closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
  closeMenu.style.display = 'none'
  nav.style.transform = 'translate(100%)'
  menu.style.display = 'block'
})

