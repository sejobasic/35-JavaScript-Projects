const container = document.getElementById('container')
const colors = [
  '#d7bce8',
  '##dbc3ea',
  '#dfc9ed',
  '#e3d0ef',
  '#e7d7f1',
  '#ebdef4',
  '#efe4f6',
  '#593959',
  '#A2AD91',
  '#DBB4AD',
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
  // Set the css properties on the square element
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
const removeColor = (element) => {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}