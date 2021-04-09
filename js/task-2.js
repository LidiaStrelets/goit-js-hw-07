const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createBtnRef = document.querySelector('[data-action="create-list"]');
console.log(createBtnRef);

const handleBtnClick = () => {
  const listItems = ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    // добавляю класс для оформления
    return listItem;
  });

  const listRef = document.querySelector('#ingredients');
  listRef.append(...listItems);
};

createBtnRef.addEventListener('click', handleBtnClick);
