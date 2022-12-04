const searchBar = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')
const contentContainer = document.querySelector('.content-container')
const listContainer = document.querySelector('.watchlist-container')

listContainer.textContent = 'hello'

let searchValue = searchBar.value
let movieList = []
let list = []

function getSearchValue(e) {
  searchValue = e.target.value
  return searchValue
}

searchBar.addEventListener('change', getSearchValue)

document.addEventListener('click', (e) => {
  if (e.target.dataset.add) {
    addMovieToList(e.target.dataset.add)
  }
})

searchBtn.addEventListener('click', async () => {
  const resp = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=771896a&`)
  const data = await resp.json()

  renderMovie(data.Search)
})

async function renderMovie(data) {
  let movieHTML = ''

  for (let id of data) {
    const movieResp = await fetch(`http://www.omdbapi.com/?i=${id.imdbID}&apikey=771896a`)
    const movieData = await movieResp.json()
    movieList.push(movieData)



    movieHTML += `
    <div class="movie-container">
      <img
        class="movie-poster"
        src="${movieData.Poster}"
        alt="movie poster"
      />
      <div class="movie-info">
        <h3 class="movie-title">${movieData.Title}</h3>
        <div class="movie-actions">
          <h4><img src="./images/rating.png" alt="star rating" /> ${movieData.imdbRating}</h4>
          <h4 class="movie-genre">${movieData.Genre}</h4>
          <button class="add-btn">
            <img data-add="${movieData.imdbID}" src="./images/add.png" alt="add button" />
          </button>
        </div>
        <p class="movie-description">${movieData.Plot}</p>
      </div>
    </div>
    `
  }
  contentContainer.innerHTML = movieHTML
}

function addMovieToList(movieId) {

  const targetObj = movieList.filter(movie => {
    console.log(movie.imdbID)
    return movie.imdbID === movieId
  })[0]

  list.push(targetObj)
  console.log(list)
  renderList()
}

function renderList() {
  list.map(movie => {
  contentContainer.innerHTML += `
  <div class="movie-container">
  <img
    class="movie-poster"
    src="${movie.Poster}"
    alt="movie poster"
  />
  <div class="movie-info">
    <h3 class="movie-title">${movie.Title}</h3>
    <div class="movie-actions">
      <h4><img src="./images/rating.png" alt="star rating" /> ${movie.imdbRating}</h4>
      <h4 class="movie-genre">${movie.Genre}</h4>
      <button class="add-btn">
        <img data-add="${movie.imdbID}" src="./images/add.png" alt="add button" />
      </button>
    </div>
    <p class="movie-description">${movie.Plot}</p>
  </div>
</div>
  `
  })
}