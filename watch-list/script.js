const searchBar = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')

let searchValue = searchBar.value

function getSearchValue(e) {
  searchValue = e.target.value
  return searchValue
}

searchBar.addEventListener('change', getSearchValue)

searchBtn.addEventListener('click', () => {
  fetch(`http://www.omdbapi.com/?t=${searchValue}&apikey=771896a`)
  .then(resp => resp.json())
  .then(data => console.log(data))
})
