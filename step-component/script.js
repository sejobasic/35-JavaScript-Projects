
// get all elements
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  // If we get to end don't go past the last circle
  if(currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  // if less than 1 stop
  if(currentActive < 1) {
    currentActive = 1
  }

  update()
})

// Add active class to each circle
function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  // Change progress line style according to length in percent
  progress.style.width = ((actives.length - 1) / (circles.length -1) * 100 + '%')

  // If on first circle disable prev button
  // Else if at end disable next button
  // If in middle don't disable
  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}