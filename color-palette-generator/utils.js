function showModal(el) {
  const modal = document.querySelector('.modal')
  modal.innerHTML = `
    <h4>${el.textContent} copied to the clipboard</h4>
  `
  modal.style.display = 'block'
  setTimeout(() => {
    modal.style.display = 'none'
  }, 1000)
}

function copyHexToClipboard() {
  const colorBlock = [...document.getElementsByClassName('color-block')]
  colorBlock.forEach((el) => {
    el.addEventListener('click', () => {
      navigator.clipboard
        .writeText(el.textContent)
        .then(() => showModal(el))
        .catch(() => alert('copy failed'))
    })
  })
}

export { copyHexToClipboard }
