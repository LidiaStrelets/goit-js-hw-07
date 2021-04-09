const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', event => {
  refs.name.textContent = event.currentTarget.value;
});
