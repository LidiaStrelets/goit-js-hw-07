const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};
console.log(refs);
let currentValue = refs.value.textContent;
console.log(currentValue);

const increaseCounter = value => (value += 1);
const decreaseCounter = value => (value -= 1);

refs.decrementBtn.addEventListener('click', () => {
  currentValue = decreaseCounter(currentValue);
  refs.value.textContent = currentValue;
});
refs.incrementBtn.addEventListener('click', () => {
  currentValue = increaseCounter(currentValue);
  refs.value.textContent = currentValue;
});
