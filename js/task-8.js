const refs = {
  amount: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-action="render"]'),
  clearBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};
// console.log(refs);
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
const createBoxes = amount => {
  const elements = [];
  let boxWidth = 30;
  let boxHeight = 30;
  for (let i = 0; i < amount; i += 1) {
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
    elements.push(el);
  }
  refs.boxes.append(...elements);
};
const destroyBoxes = () => {
  console.log('destroy this', refs.boxes.innerHTML);
  refs.boxes.innerHTML = '';
};

refs.createBtn.addEventListener('click', event => {
  const userInput = refs.amount.value;
  //   console.log('userInput', userInput);
  createBoxes(refs.amount.value);
  console.log(refs.boxes.height);
});

refs.clearBtn.addEventListener('click', event => {
  destroyBoxes();
});
