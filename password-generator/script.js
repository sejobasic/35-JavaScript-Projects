const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordContainer = document.querySelector('.password-container')
const buttonEl = document.querySelector('.btn')


const firstPasswordEl = document.createElement('div');

firstPasswordEl.classList.add('password');


// Render passwords on click
buttonEl.addEventListener('click', () => {
    let firstPassword = getRandomPassword()
    
    firstPasswordEl.textContent = firstPassword
    
    passwordContainer.appendChild(firstPasswordEl)
    passwordContainer.appendChild(secondPasswordEl)
    
})

// Generate random password
function getRandomPassword() {
  const shuffled = [...characters].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15).join('');
}




