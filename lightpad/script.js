const container = document.getElementById('container')
const colors = [
  '#9D6381',
  '##FDECEF',
  '#612940',
  '#7CEA9C',
  '#55D6BE',
  '#2E5EAA',
  '#5B4E77',
  '#593959',
  '#FF5666',
  '#00FDDC',
  '#A2AD91',
  '#DBB4AD',
  '#8884FF',
]
const SQUARES = 500

// loop over squares
// for every square add class
// insert the square with class into container
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  // Set color on square on mouse hover
  square.addEventListener('mouseover', () => {
    setColor(square)
  })
  // Remove color on square on mouse leave
  square.addEventListener('mouseout', () => {
    removeColor(square)
  })

  container.appendChild(square)
}

const setColor = (element) => {
  const color = getRandomColor()
}
const removeColor = (element) => {

}
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}