let userInput = 0
let day = 'day'
document.getElementById('button').addEventListener('click', museum)

function museum () {
  userInput = document.getElementById('age').value
  userInput = parseInt(userInput)
 if ((userInput > 12 && userInput < 21) || (day == 'Tuesday' || day == 'Thursday')) {
    document.getElementById('answer').innerHTML === 'You are elegible for student pricing'
  } else {
    document.getElementById('answer').innerHTML === 'You must pay regular pricing'
  }
} 
