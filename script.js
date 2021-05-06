document.getElementById('button').addEventListener('click', find)
let number = 0

function find () {
  number = document.getElementById('inputbox').value
  number = parseInt(number)

  if (number < 0) {
    document.getElementById('textbox').innerHTML = 'Negative'
  } else {
    document.getElementById('textbox').innerHTML = 'Positive'
  }
}
