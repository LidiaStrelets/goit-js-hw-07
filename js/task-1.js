const listItemsRef = document.querySelectorAll('.item');

console.log(`В списке ${listItemsRef.length} категории.`);

listItemsRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent};`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length};`);
});
