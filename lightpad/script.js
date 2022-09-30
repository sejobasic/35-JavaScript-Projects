// Axios API Config

const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)

    createUserCard(data)
    getRepos(username)
  } catch (err) {
    // If user does not exist render error card
    if (err.response.status == 404) {
      createErrorCard('User not found')
    }
  }
}

// Get users repos
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')

    addReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching user repos')
  }
}

function createUserCard(user) {
  const cardHtml = `
    <div class="card">
      <div>
        <img
          src="${user.avatar_url}"
          alt="user profile picture"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `
  main.innerHTML = cardHtml
}

function createErrorCard(msg) {
  const errorCard = `
    <div class='card'>
      <h1>${msg}</h1>
    </div>
  `
  main.innerHTML = errorCard
}

function addReposToCard(repos) {
  const reposElement = document.getElementById('repos')

  repos.slice(0, 10).forEach((repo) => {
    const repoLink = document.createElement('a')
    repoLink.classList.add('repo')
    repoLink.href = repo.html_url
    repoLink.target = '_blank'
    repoLink.innerText = repo.name

    reposElement.appendChild(repoLink)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value

  if (user) {
    // Get user
    getUser(user)

    // Clear search value
    search.value = ''
  }
})
