  const trackEl = document.querySelector('.gallery');
const itemEl = document.querySelectorAll('li');

let currentIndex = 0;

window.addEventListener('keydown', onKeyPress);

function updateSlider() {
  const offset = -currentIndex * 100;
  trackEl.style.transform = `translateX(%${offset}%)`;
}

function onKeyPress(event) {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % itemEl.length;
    updateSlider();
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + itemEl.length) % itemEl.length;
    updateSlider();
  }
}

// ------------------------------------------------------------------------------------------------

const createBtn = document.getElementById('createBtn');
const clearBtn = document.getElementById('clearBtn');
const inputAmount = document.getElementById('inputAmount');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputAmount.value, 10);
  if (amount > 0) {
    createBoxes(amount);
  } else {
    alert('Введіть коректну кількість елементів');
  }
});

clearBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomColor();
    boxesContainer.appendChild(box);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}