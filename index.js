console.log('Sendbox: I am first script: ' + window.a)

window.a = 'Hello world Sendbox'
const script = document.createElement('script');

script.src = './test.js'

document.body.appendChild(script)