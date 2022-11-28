import { copyHexToClipboard } from './utils.js'

const colorInput = document.querySelector('.color-input')
const selectMode = document.querySelector('.select-mode')
const colorContainer = document.querySelector('.color-container')
const getColorBtn = document.querySelector('.get-color-btn')

let colorsArr = []
let selectedColor = colorInput.value.slice(1)
let selectedMode = selectMode.value

function getColor(e) {
  selectedColor = e.target.value.slice(1)
  return selectedColor
}

function getMode(e) {
  selectedMode = e.target.value
  return selectedMode
}

colorInput.addEventListener('change', getColor)
selectMode.addEventListener('change', getMode)

getColorBtn.addEventListener('click', () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      colorsArr = data.colors
      renderColors()
    })
})

function renderColors() {
  let colorsHtml = ''

  colorsArr.map((color) => {
    colorsHtml += `
        <div 
          class='color-block' 
          style='background-color:${color.hex.value}'>
          <h3 class='hex-code'>${color.hex.value}</h3>
        </div>
        <h3 class='color-name'>${color.name.value}</h3>
      `
  })
  colorContainer.innerHTML = colorsHtml
  copyHexToClipboard()
}
