// echo -n
// compare it with ch9/sec1/images.js, not reduce code, reduce nested structure, clean and clear code 

'use strict'

const loadImage = url => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    const callback = () => {
      if (request.status == 200) { 
        const blob = new Blob([request.response], {type: 'image/png'})
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        resolve(img)
      } else {
        reject(Error(`${request.status}: ${request.statusText}`))
      }
    }

    // http request and response
    request.open('GET', url)
    request.responseType = 'blob'
    request.addEventListener('load', callback)
    request.addEventListener('error', event => reject(Error('Network error')));
    request.send()
  })  
}

// callback function 2
document.addEventListener('DOMContentLoaded', () => {
  const imgdiv = document.getElementById('images')
  const promise = loadImage('../../hanafuda/1-1.png')
  console.log({promise})
  promise.then(img => {
    imgdiv.appendChild(img)
    console.log({promise})
  })
})
