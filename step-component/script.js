// Change panel class to active

// Select all of our panels in node list
const panels = document.querySelectorAll('.panel')

// On each panel click do function
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

// Remove active class from panel
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}