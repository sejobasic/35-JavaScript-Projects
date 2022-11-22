import characterData from './data.js'
import Character from './character.js'
import { getDiceRollArray } from './utils.js'

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
  wizard.getDiceHtml()
  orc.getDiceHtml()
  render()
}

function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharacterHtml()
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}
render()
