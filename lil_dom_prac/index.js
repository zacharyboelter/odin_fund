

const para = document.createElement('p')

para.classList.add('paragraph-red')
para.textContent = 'Hey, I am red!'
para.style.color = 'red'

container.appendChild(para)

const blue = document.createElement('h3')
blue.textContent = 'I am a blue h3'
blue.style.color = 'blue'
container.appendChild(blue)

const newDiv = document.createElement('div')
newDiv.style.cssText = 'border: 1px solid black; background: pink'

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
const p = document.createElement('p')
p.textContent = 'Me too!'

newDiv.appendChild(h1)
newDiv.appendChild(p)






container.appendChild(newDiv)