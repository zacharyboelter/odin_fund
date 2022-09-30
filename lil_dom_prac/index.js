

// const para = document.createElement('p')

// para.classList.add('paragraph-red')
// para.textContent = 'Hey, I am red!'
// para.style.color = 'red'

// container.appendChild(para)

// const blue = document.createElement('h3')
// blue.textContent = 'I am a blue h3'
// blue.style.color = 'blue'
// container.appendChild(blue)

// const newDiv = document.createElement('div')
// newDiv.style.cssText = 'border: 1px solid black; background: pink'

// const h1 = document.createElement('h1')
// h1.textContent = "I'm in a div"
// const p = document.createElement('p')
// p.textContent = 'Me too!'

// newDiv.appendChild(h1)
// newDiv.appendChild(p)

// container.appendChild(newDiv)

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// const bttn = document.querySelector('#btn');
// btn.addEventListener('click', alertFunction);
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
// });

// const buttons = document.querySelectorAll('button')

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         alert(button.id)
//     })
// })



function removeTransition(e){
    if(e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio) return
   
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)