import initializeSlider from './owlCarousel';
import imgOffer1 from '../images/torty.jpg';
import imgOffer2 from '../images/cake1.jpg';
import imgOffer3 from '../images/ciastka.jpg';
import imgOffer4 from '../images/pieczywo.jpg';
import imgOffer5 from '../images/drozdzowki.jpg';

const offerList = [
  {
    name: 'torty',
    img: imgOffer1,
    alt: 'Tort',
    href: 'oferta/index.html#oferta-torty',
  },
  {
    name: 'ciasta',
    img: imgOffer2,
    alt: 'Ciasto z brzoskwiniami',
    href: 'oferta/index.html#oferta-ciasta',
  },
  {
    name: 'ciastka',
    img: imgOffer3,
    alt: 'Ciastka',
    href: 'oferta/index.html#oferta-ciastka',
  },
  {
    name: 'pieczywo',
    img: imgOffer4,
    alt: 'Chleb w kromkach',
    href: 'oferta/index.html#oferta-pieczywo',
  },
  {
    name: 'drożdżówki',
    img: imgOffer5,
    alt: 'Drożdżówka',
    href: 'oferta/index.html#oferta-drozdzowki',
  },
];

const createOfferCards = () => {
  const list = document.querySelector('.offer__slider .slider__card-list');
  const dots = document.querySelector('.offer__slider .slider__dots');

  offerList.forEach((offerCard) => {
    const card = document.createElement('div');
    card.classList.add('slider__card-item');
    card.innerHTML = `
                <div class="slider__card-item">
                <img
                  src=${offerCard.img}
                  alt=${offerCard.alt}
                  class="slider__card-image"
                  draggable="false"
                />
                <div class="slider__text">
                  <h3 class="slider__title">${offerCard.name}</h3>
                  <a href=${offerCard.href} class="slider__button">Zobacz</a>
                </div>
              </div>`;
    list.appendChild(card);
    const dot = document.createElement('span');
    dots.appendChild(dot);
  });
};

createOfferCards();

window.addEventListener('DOMContentLoaded', () => {
  initializeSlider(
    '.offer__slider .slider__card-list',
    '.offer__slider .slider__arrow',
    '.offer__slider .slider__card-item',
    '.offer__slider .slider__dots span',
    3000
  );
});
