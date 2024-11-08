import '../components/nav';
import '../components/contact';
import '../components/heading';
import '../sass/index.scss';
import createPageHeader from '../components/heading';

createPageHeader('.aboutus-header', 'O naszej cukierni');

const cards = document.querySelectorAll('.card');

// function showCard() {
//   cards.forEach((card) => {
//     card.classList.remove('active-offer-photo');
//     this.classList.add('active-offer-photo');
//   });
// }

// cards.forEach((card) => {
//   card.addEventListener('click', showCard);
// });

let activeIndex = 0;

// Funkcja do pokazania aktywnej karty na podstawie indeksu
function updateActiveCard(index) {
  cards.forEach((card, idx) => {
    card.classList.toggle('active-offer-photo', idx === index);
  });
}

// Obsługa kliknięcia na kartę (zmiana na wybraną kartę)
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    activeIndex = index;
    updateActiveCard(activeIndex);
  });
});

// Obsługa gestów przesunięcia na urządzeniach dotykowych
let startX = 0;
let isTouching = false;

document.addEventListener('touchstart', (event) => {
  isTouching = true;
  startX = event.touches[0].clientX;
});

document.addEventListener('touchmove', (event) => {
  if (!isTouching) return;

  const moveX = event.touches[0].clientX;
  const diffX = startX - moveX;

  if (diffX > 50 && activeIndex < cards.length - 1) {
    // Przesunięcie w lewo - następna karta
    activeIndex += 1;
    updateActiveCard(activeIndex);
    isTouching = false;
  } else if (diffX < -50 && activeIndex > 0) {
    // Przesunięcie w prawo - poprzednia karta
    activeIndex -= 1;
    updateActiveCard(activeIndex);
    isTouching = false;
  }
});

document.addEventListener('touchend', () => {
  isTouching = false;
});

