let userInput = 0
let const = 'date'
document.getElementById('button').addEventListener('click', museum)

function museum () {
  userInput = document.getElementById('age').value
  userInput = parseInt(userInput)
  if ((userInput > 12 && userInput < 21) || (const === 'Tuesday' || const === 'Thursday')) {
    document.getElementById('answer').innerHTML = 'You are elegible for student pricing'
  } else {
    document.getElementById('answer').innerHTML = 'You must pay regular pricing'
  }
}
