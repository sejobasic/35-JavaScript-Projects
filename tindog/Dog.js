class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  setMatchStatus(bool) {
    this.hasBeenLiked = bool
    this.hasBeenSwiped = true
  }

  setLiked(bool) {
    this.hasBeenLiked = bool

    return `<img class='status-banner' src='./images/like-image.png' alt='like banner icon'/>`
  }

  setDogHtml() {
    const {name, avatar, age, bio} = this

    return `
        <img class="dog-avatar" src="${avatar}" alt="dog avatar" />
        <div class="dog-info">
          <h3 class="dog-name-age">${name}, ${age}</h3>
          <p class="dog-bio">${bio}</p>
        </div>
    `
  }
}

export default Dog