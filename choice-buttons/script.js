const containerEl = document.querySelector('.container')
const declineBtn = document.querySelector('.decline-btn')

// On mouse hover toggle reverse class
declineBtn.addEventListener('mouseenter', () => {
  containerEl.classList.toggle('reverse')
})