const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// Run func every 30milsec
let int = setInterval(blurring, 30)

function blurring() {
  load++

  // Clear the interval func when we hit 99
  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// map 0-100 load numbers to 1-0 opacity
// num = load
// in_min/in_max = 0-100
// out_min/out_max = 1-0
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
