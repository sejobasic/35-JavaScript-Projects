function getData() {
  fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
  .then(data => renderActivity(data))
}



function renderActivity(data) {
  return document.querySelector('.activity-container').innerHTML = `<h2>${data.activity}</h2>`
}

document.querySelector('.activity-btn').addEventListener('click', getData)