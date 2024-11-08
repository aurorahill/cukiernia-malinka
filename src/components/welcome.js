import welcomeBg from '../images/pie-bcg-small.png';

const welcome = () => {
  const brownBox = document.querySelector('.brown-box');
  brownBox.innerHTML = `<div class="brown-box__text">Zapraszamy!</div>`;
  brownBox.style.backgroundImage = `url(${welcomeBg})`;
};

export default welcome;
