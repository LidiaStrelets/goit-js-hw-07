const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', event => {
  if (event.currentTarget.value === '') {
    console.log('you');
    refs.name.textContent = 'незнакомец';
  } else {
    refs.name.textContent = event.currentTarget.value;
  }
});
