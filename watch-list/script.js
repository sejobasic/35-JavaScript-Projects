const searchBar = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')
const contentContainer = document.querySelector('.content-container')

let searchValue = searchBar.value
let movieId = []

function getSearchValue(e) {
  searchValue = e.target.value
  return searchValue
}

searchBar.addEventListener('change', getSearchValue)

searchBtn.addEventListener('click', () => {
  fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=771896a&`)
  .then(resp => resp.json())
  .then(data => {
    data.Search.map(movie => {
    movieId.push(movie.imdbID)
  })
  renderMovie()
}
  )
})

function renderMovie() {
  
  movieId.map(id => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=771896a`)
    .then(resp => resp.json())
    .then(movie => 
      contentContainer.innerHTML = `
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
              <img src="./images/add.png" alt="add button" />
            </button>
          </div>
          <p class="movie-description">${movie.Plot}</p>
        </div>
      </div>
        `
      )
  })
}
