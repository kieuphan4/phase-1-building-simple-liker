// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('span.like-glyph')
  heartPost(hearts);
})

const heartPost = (hearts) => {
  for (const heart of hearts) { // selecting each heart
    heart.addEventListener('click', (e) => {
      mimicServerCall()
      //promises have the .then()
      .then(() => { // the second .then in fetch that is doing something with the response because .json() cannnot be called on a string, only objects
      if(heart.innerHTML == EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.className = "activated-heart"
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.className = "like-glyph"
      }  
    })
    .catch(() => {
      document.getElementById('modal').className = 'show'
    })
    setTimeout(() => {
      document.getElementById('modal').className = 'hidden'}, 3000)
    })
  }
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
