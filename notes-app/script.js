const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())

const colorArr = [
  '#EDCF8E',
  '#D0ABA0',
  '#F6E7CB',
  '#CCC9E7',
  '#BBE1C3',
  '#F2F5FF',
  '#F3E9DC',
  '#E8D7F1',
  '#D8D4D5',
  '#D0D6B5',
  '#F2F5FF',
]

// selecting random background color for note text area
const random_color = colorArr[Math.floor(Math.random() * colorArr.length)]

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
    <div class="tools">
      <button class="edit">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea 
      style="background-color: ${random_color}" 
      class="${text ? 'hidden' : ''}"></textarea>
  `

  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('.textarea')

  deleteBtn.addEventListener('click', () => {
    note.remove()
  })

  

  document.body.appendChild(note)
}
