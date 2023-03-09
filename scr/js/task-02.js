const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

const liRef = ingredients.map((ingredient) => {
const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ul.append(...liRef);