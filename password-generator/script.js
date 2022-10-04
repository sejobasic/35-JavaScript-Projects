import { characters } from './characters.js'

const passwordContainer = document.querySelector('.password-container')
const buttonEl = document.querySelector('.btn')

const firstPasswordEl = document.createElement('div')
const clipboardEl = document.createElement('img')

firstPasswordEl.classList.add('password')
clipboardEl.classList.add('clipboard')

clipboardEl.src = 'clipboard.svg'
clipboardEl.alt = 'clipboard copy paste icon'

// Render passwords on click
buttonEl.addEventListener('click', () => {
  let firstPassword = getRandomPassword()

  firstPasswordEl.textContent = firstPassword

  passwordContainer.appendChild(firstPasswordEl)
  passwordContainer.appendChild(clipboardEl)
})

// Copy password to clipboard
clipboardEl.addEventListener('click', () => {
  const password = firstPasswordEl.textContent

  if (navigator.clipboard) {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password has been copied to clipboard')
    })
  } else {
    console.log('Browser Not compatible')
  }
})

// Generate random password
function getRandomPassword() {
  const shuffled = [...characters].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 15).join('')
}
