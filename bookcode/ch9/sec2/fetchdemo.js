// echo -n

'use strict'

document.addEventListener('DOMContentLoaded', () => {
  // call library functions that return a promise
  // library function Fetch() is simplified way to return a promise
  const promise = fetch('https://horstmann.com/javascript-impatient/hanafuda/index.html')

  document.getElementById('text').textContent = 'Promise pending'
  console.log({promise})  

  // promise result
  promise
    .then(response => response.text())
    .then(text => {
      document.getElementById('text').textContent = text
      console.log({promise})
    })    
})
