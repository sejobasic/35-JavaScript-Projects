import dogs from './data.js'
import Dog from './Dog.js'

const mainContent = document.querySelector('.main-content')
const likeBtn = document.querySelector('.like-btn')
const swipeBtn = document.querySelector('.swipe-btn')

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

likeBtn.addEventListener('click', isLiked)
swipeBtn.addEventListener('click', isSwiped)

renderDog()

function renderDog() {
  mainContent.innerHTML = currentDog.setDogHtml()
}

function getNewDog() {
  currentDogIndex += 1
  currentDog = new Dog(dogs[currentDogIndex])

  if (currentDogIndex < 3) {
    renderDog()
  } else {
    document.querySelector(
      '.choice-btn-container'
    ).innerHTML = `
        <div class='modal'>
            <h1>No more doggos in your area.</h1>
        </div>`
    mainContent.style.display = 'none'
  }

  swipeBtn.disabled = false
  likeBtn.disabled = false
}

function isLiked() {
  swipeBtn.disabled = true
  likeBtn.disabled = true
  mainContent.innerHTML += currentDog.setMatchStatus(true)

  setTimeout(() => {
    getNewDog()
  }, 1000)
}

function isSwiped() {
  likeBtn.disabled = true
  swipeBtn.disabled = true
  currentDog.hasBeenSwiped = true
  mainContent.innerHTML += currentDog.setMatchStatus(false)

  setTimeout(() => {
    getNewDog()
  }, 1000)
}
