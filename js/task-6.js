const inputRef = document.querySelector('#validation-input');
const length = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(length)) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
});
