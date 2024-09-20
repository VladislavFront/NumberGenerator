let h1 = document.querySelector('.h1')
let minTitle = document.querySelector('.min-title')
let maxTitle = document.querySelector('.max-title')

let min = 1
let max = 10

minTitle.innerHTML = 'От: ' + min
maxTitle.innerHTML = 'До: ' + max


function plusMin() {
  min += 1
  minTitle.innerHTML = 'От: ' + min
}

function minusMin() {
  min -= 1
  minTitle.innerHTML = 'От: ' + min
}

function plusMax() {
  max += 1
  maxTitle.innerHTML = 'До: ' + max
}

function minusMax() {
  max -= 1
  maxTitle.innerHTML = 'До: ' + max
}

function generate() {
  let result = Math.floor(Math.random() * (max - min + 1)) + min
  h1.innerHTML = result
}

function reset() {
  min = 1
  max = 10

  h1.innerHTML = 0
  
  minTitle.innerHTML = 'От: ' + min
  maxTitle.innerHTML = 'До: ' + max
}
