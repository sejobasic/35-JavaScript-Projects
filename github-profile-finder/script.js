// Axios API Config

const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

function createUserCard(user) {
  const cardHtml = `
    <div class="card">
      <div>
        <img
          src="https://randomuser.me/api/portraits/men/30.jpg"
          alt="user profile picture"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>johndoe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <ul>
          <li>300 <strong>Followers</strong></li>
          <li>100 <strong>Following</strong></li>
          <li>30 <strong>Repos</strong></li>
        </ul>

        <div id="repos">
          <a href="#" class="repos">Repo 1</a>
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
