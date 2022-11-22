import characterData from './data.js'
import Character from './character.js'

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
  wizard.getDiceHtml()
  orc.getDiceHtml()
  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
  render()

  if (orc.dead || wizard.dead) {
    endGame()
  }
}

function endGame() {
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? 'No victors - all creatures are dead'
      : wizard.health > 0
      ? 'The Wizard Wins'
      : 'The Orc is Victorious'

  const endEmoji =
    wizard.health > orc.health ? '🔮' : '☠️'

  document.body.innerHTML = `<div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
  </div>`
}

function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharacterHtml()
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}
render()
