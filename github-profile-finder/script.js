// Axios API Config

const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    
    createUserCard(data)
  } catch (err) {
    console.log(err)
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
          <li>${user.followers_url} <strong>Followers</strong></li>
          <li>${user.following_url} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
          <a href="#" class="repos"></a>
          <a href="#" class="repos">Repo 2</a>
          <a href="#" class="repos">Repo 3</a>
        </div>
      </div>
    </div>
  `
  main.innerHTML = cardHtml
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
