const refs = {
  amount: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-action="render"]'),
  clearBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const createBoxes = amount => {
  const elements = [];
  elements.length = amount;
  elements.fill(1);
  let boxWidth;
  let boxHeight;
  if (boxes.innerHTML === '') {
    boxWidth = 30;
    boxHeight = 30;
  } else {
    const stringWidth = boxes.lastElementChild.style.width;
    const stringHeight = boxes.lastElementChild.style.height;
    boxWidth = Number(stringWidth.slice(0, stringWidth.length - 2)) + 10;
    boxHeight = Number(stringHeight.slice(0, stringWidth.length - 2)) + 10;
  }

  const markup = elements.map((item, index, array) => {
    const el = document.createElement('div');
    el.classList.add('box');
    el.style.backgroundColor = `rgb(${randomInteger(0, 255)}, ${randomInteger(
      0,
      255,
    )},${randomInteger(0, 255)})`;
    el.style.width = `${boxWidth}px`;
    boxWidth += 10;
    el.style.height = `${boxHeight}px`;
    boxHeight += 10;
    return el;
  });

  refs.boxes.append(...markup);
};
const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
};

refs.createBtn.addEventListener('click', () => {
  let userInput = refs.amount.value;
  createBoxes(refs.amount.value);
  refs.amount.value = 0;
});

refs.clearBtn.addEventListener('click', () => {
  destroyBoxes();
});

refs.amount.addEventListener('input', event => {
  window.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
      const userInput = refs.amount.value;
      createBoxes(userInput);
    }
  });
});
