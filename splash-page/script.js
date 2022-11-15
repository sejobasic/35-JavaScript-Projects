const formEl = document.querySelector('.signup-form')
const mainContent = document.querySelector('.main-content')

formEl.addEventListener('submit', () => {
  mainContent.innerHTML = `
    <div class='success-wrapper'>
      <i class="fa-solid fa-check"></i>
      <h2 class='success-text'>Thank you for signing up!</h2>
      <p>You will receive special weekly deals from 
        Freshly Ground directly to your inbox.
      </p>
    </div>
  `
})
