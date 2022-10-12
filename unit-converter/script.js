// import all elements

// Add event listener on button
// On click convert input fields value
// Round numbers down three decimal places using .toFixed(3)
// Render conversion string into convertedEl paragraph tag

const inputEl = document.querySelector('.num-input')
const btnEl = document.querySelector('.btn')
const convertedEl = document.querySelector('.converted')

btnEl.addEventListener('click', () => {
  convertMetric()
})


function convertMetric() {
  console.log(inputEl.value)

  convertedEl.textContent = `${inputEl.value} meters = 65.616 feet | ${inputEl.value} feet = 6.096 meters `
}



