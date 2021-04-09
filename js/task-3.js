const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryRef = document.querySelector('#gallery');
// console.log(galleryRef.padding);

const createBtnRef = document.querySelector('[data-action="create-gallery"]');
createBtnRef.addEventListener('click', () => {
  const listItemsMarkup = images.map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" width="400" /></li>`,
  );

  const galleryRef = document.querySelector('#gallery');
  galleryRef.style.height = '265px';
  galleryRef.style.padding = '20px';
  galleryRef.insertAdjacentHTML('afterbegin', listItemsMarkup.join(''));
});
