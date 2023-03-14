function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const spanEl = document.querySelector(".color");
// const btnEl = document.querySelector(".change-color");

// btnEl.addEventListener("click", () => {
//   document.body.style.background = getRandomHexColor();
//   spanEl.textContent = getRandomHexColor();
// });

const textColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.body;

const changeColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};
changeColorBtn.addEventListener('click', changeColor);