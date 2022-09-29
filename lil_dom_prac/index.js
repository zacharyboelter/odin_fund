

const para = document.createElement('p')

para.classList.add('paragraph-red')
para.textContent = 'Hey, I am red!'
para.style.color = 'red'

container.appendChild(para)

const blue = document.createElement('h3')
blue.textContent = 'I am a blue h3'
blue.style.color = 'blue'
container.appendChild(blue)

