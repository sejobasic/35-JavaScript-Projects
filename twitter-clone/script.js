import { tweetsData as tweets } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

let tweetsData = [...tweets]

if (localStorage.getItem('tweets')) {
  tweetsData = JSON.parse(localStorage.getItem('tweets'))
}

// Listen for click on dataset icons
// Pass id into handler functions
document.addEventListener('click', function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like)
  } else if (e.target.dataset.retweet) {
    handleRetweetClick(e.target.dataset.retweet)
  } else if (e.target.dataset.reply) {
    handleReplyClick(e.target.dataset.reply)
  } else if (e.target.id === 'tweet-btn') {
    handleTweetBtnClick()
  } else if (e.target.dataset.del) {
    handleDeleteTweet(e.target.dataset.del)
  }
})

function handleLikeClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId
  })[0]

  if (targetTweetObj.isLiked) {
    targetTweetObj.likes--
  } else {
    targetTweetObj.likes++
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked
  render()
}

function handleRetweetClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId
  })[0]

  if (targetTweetObj.isRetweeted) {
    targetTweetObj.retweets--
  } else {
    targetTweetObj.retweets++
  }
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
  render()
}

function handleReplyClick(replyId) {
  document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

// Add new tweets - insert new tweet obj in tweets data
// Use uuidjs to generate unique identifier
function handleTweetBtnClick() {
  const tweetInput = document.getElementById('tweet-input')

  if (tweetInput.value) {
    tweetsData.unshift({
      handle: `@noobdev`,
      profilePic: `https://i.pravatar.cc/400?img=57`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4(),
    })
    saveToStorage()
    render()
    tweetInput.value = ''
  } else {
    tweetInput.classList.toggle('is-empty')
  }
}

function handleDeleteTweet(tweetId) {
  const targetTweet = tweetsData.map((tweet) => tweet.uuid).indexOf(tweetId)
  tweetsData.splice(targetTweet, 1)
  saveToStorage()
  render()
}

function saveToStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweetsData))
}

function getFeedHtml() {
  let feedHtml = ``

  tweetsData.forEach(function (tweet) {
    let likeIconClass = ''

    if (tweet.isLiked) {
      likeIconClass = 'liked'
    }

    let retweetIconClass = ''

    if (tweet.isRetweeted) {
      retweetIconClass = 'retweeted'
    }

    let repliesHtml = ''

    if (tweet.replies.length > 0) {
      tweet.replies.forEach(function (reply) {
        repliesHtml += `
        <div class="tweet-reply">
            <div class="tweet-inner">
                <img src="${reply.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${reply.handle}</p>
                        <p class="tweet-text">${reply.tweetText}</p>
                    </div>
                </div>
        </div>
        `
      })
    }

    feedHtml += `
    <div class="tweet">
    <div class="tweet-inner">
    <div class="deleteBtn">
     <button class='delete-btn' id="del-btn${tweet.uuid}" data-del="${tweet.uuid}">X</button>
    </div>
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
        <p class="handle">${tweet.handle}</p>
        <p class="tweet-text">${tweet.tweetText}</p>
        <div class="tweet-details">
        <span class="tweet-detail">
        <i class="fa-regular fa-comment-dots"
                        data-reply="${tweet.uuid}"
                        ></i>
                        ${tweet.replies.length}
                    </span>
                    <span class="tweet-detail">
                        <i class="fa-solid fa-heart ${likeIconClass}"
                        data-like="${tweet.uuid}"
                        ></i>
                        ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                        <i class="fa-solid fa-retweet ${retweetIconClass}"
                        data-retweet="${tweet.uuid}"
                        ></i>
                        ${tweet.retweets}
                    </span>
                </div>   
            </div>            
        </div>
        <div class="hidden" id="replies-${tweet.uuid}">
            ${repliesHtml}
        </div>   
    </div>
    `
  })
  return feedHtml
}

function render() {
  document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
