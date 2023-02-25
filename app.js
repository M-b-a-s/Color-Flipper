const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    'A', 'B', 'C', 'D', 'E', 'F'];
const btnEl = document.getElementById('btn');
const color = document.querySelector('.color');
const container = document.querySelector('.container');



btnEl.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomHex()];
    }

    btnEl.style.color = '#fff'
    container.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
})

// generate random hex number
function getRandomHex() {
   return Math.floor(Math.random() * colors.length);
}


