import dogs from './data.js'
import Dog from './Dog.js'

const mainContent = document.querySelector('.main-content')

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])


document.querySelector('.like-btn').addEventListener('click', isLiked)

renderDog()

function renderDog() {
  mainContent.innerHTML = currentDog.setDogHtml()
}

function getNewDog() {
  currentDogIndex += 1
  currentDog = new Dog(dogs[currentDogIndex])
  renderDog()
}

function isLiked() {
  mainContent.innerHTML += currentDog.setLiked(true)



  setTimeout(() => {
    getNewDog()
  }, 2000)
}
