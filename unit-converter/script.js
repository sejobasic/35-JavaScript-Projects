// import all elements

// Add event listener on button
// On click convert input fields value
// Round numbers down three decimal places using .toFixed(3)
// Render conversion string into convertedEl paragraph tag

const inputEl = document.querySelector('.num-input')
const btnEl = document.querySelector('.btn')

const lengthEl = document.querySelector('.length-card')
const volumeEl = document.querySelector('.volume-card')
const massEl = document.querySelector('.mass-card')

btnEl.addEventListener('click', () => {
  convertMetric()
})

function convertMetric() {
  console.log(inputEl.value)

  let meter = inputEl.value * 3.2808
  let feet = inputEl.value / 3.2808

  let liter = inputEl.value * 0.264172
  let gallon = inputEl.value / 0.264172

  let kilo = inputEl.value * 2.20462
  let pound = inputEl.value / 2.20462

  meter = meter.toFixed(3)
  feet = feet.toFixed(3)
  liter = liter.toFixed(3)
  gallon = gallon.toFixed(3)
  kilo = kilo.toFixed(3)
  pound = pound.toFixed(3)

  lengthEl.textContent = `${inputEl.value} meters = ${meter} feet | ${inputEl.value} feet = ${feet} meters`
  volumeEl.textContent = `${inputEl.value} liters = ${liter} gallons | ${inputEl.value} gallons = ${gallon} liters`
  massEl.textContent = `${inputEl.value} kilos = ${kilo} pounds | ${inputEl.value} pounds = ${pound} kilos`
}
