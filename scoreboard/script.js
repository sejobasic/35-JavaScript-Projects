const homeNum = document.querySelector('.home-num')
const guestNum = document.querySelector('.guest-num')
const clearScore = document.querySelector('.clear')

const homeOne = document.querySelector('.home-1')
const homeTwo = document.querySelector('.home-2')
const homeThree = document.querySelector('.home-3')

const guestOne = document.querySelector('.guest-1')
const guestTwo = document.querySelector('.guest-2')
const guestThree = document.querySelector('.guest-3')

let homeCount = 0
let guestCount = 0

// Increment score for home team
homeOne.addEventListener('click', () => {
    homeCount++
    homeNum.textContent = homeCount
})

homeTwo.addEventListener('click', () => {
    homeCount += 2
    homeNum.textContent = homeCount
})

homeThree.addEventListener('click', () => {
    homeCount += 3
    homeNum.textContent = homeCount
})


// Increment score for guest team
guestOne.addEventListener('click', () => {
    guestCount++
    guestNum.textContent = guestCount
})

guestTwo.addEventListener('click', () => {
    guestCount += 2
    guestNum.textContent = guestCount
})

guestThree.addEventListener('click', () => {
    guestCount += 3
    guestNum.textContent = guestCount
})


// Clear scoreboard
clearScore.addEventListener('click', () => {
    homeCount = 0
    guestCount = 0
    homeNum.textContent = homeCount
    guestNum.textContent = guestCount
})