import intro2 from '../images/intro2.jpg';
import intro1 from '../images/intro1.jpg';
import intro3 from '../images/intro3.jpg';

const slideList = [
  {
    img: `url('${intro2}')`,
    text: `<h1 class="carousel__title">Polecamy:</h1>
            <ul class="carousel__list">
              <li class="carousel__list-item">torty</li>
              <li class="carousel__list-item">ciasta</li>
              <li class="carousel__list-item">ciastka</li>
              <li class="carousel__list-item">drożdżówki</li>
              <li class="carousel__list-item">pieczywo</li>
            </ul>
            <div class="carousel__contact">
              <a
                href="https://www.facebook.com"
                class="carousel__facebook"
                >Dołącz do nas na facebooku!</a
              >
              <a class="carousel__phone" href="tel:123456789"
                ><i class="fa-solid fa-mobile-screen-button fa-bounce"></i
              ></a>
            </div>`,
  },
  {
    img: `url('${intro1}')`,
    text: `<h1 class="carousel__title">Obsługujemy:</h1>
            <ul class="carousel__list">
              <li class="carousel__list-item">wesela</li>
              <li class="carousel__list-item">chrzciny</li>
              <li class="carousel__list-item">komunie</li>
              <li class="carousel__list-item">studniówki</li>
              <li class="carousel__list-item">inne uroczystości</li>
            </ul>
            <div class="carousel__contact">
              <a
                href="https://www.facebook.com"
                class="carousel__facebook"
                >Dołącz do nas na facebooku!</a
              >
              <a class="carousel__phone" href="tel:123456789"
                ><i class="fa-solid fa-mobile-screen-button fa-bounce"></i
              ></a>
            </div>`,
  },
  {
    img: `url('${intro3}')`,
    text: `<h1 class="carousel__title">Oferta sezonowa:</h1>
            <ul class="carousel__list">
              <li class="carousel__list-item">Pierniki bożonarodzeniowe</li>
              <li class="carousel__list-item">Baby wielkanocne</li>
              <li class="carousel__list-item">Pączki i faworki</li>
              <li class="carousel__list-item">Rogale Marcińskie</li>
              <li class="carousel__list-item">Kremówki papieskie</li>
            </ul>
            <div class="carousel__contact">
              <a
                href="https://www.facebook.com"
                class="carousel__facebook"
                >Dołącz do nas na facebooku!</a
              >
              <a class="carousel__phone" href="tel:123456789"
                ><i class="fa-solid fa-mobile-screen-button fa-bounce"></i
              ></a>
            </div>`,
  },
];

const carousel = document.querySelector('.carousel');
const text = document.querySelector('.carousel__text');
const dots = [...document.querySelectorAll('.carousel__dots span')];

const time = 5000;
let active = 0;
let startX = 0;
let isDragging = false;
let currentX = 0;
let diffX = 0;

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
};

const changeSlide = () => {
  carousel.classList.add('fade-out');
  setTimeout(() => {
    carousel.style.backgroundImage = slideList[active].img;
    text.innerHTML = slideList[active].text;
    changeDot();
    carousel.classList.remove('fade-out');
    carousel.classList.add('fade-in');
  }, 500);
  setTimeout(() => {
    carousel.classList.remove('fade-in');
  }, 1000); // Czas na "pojawianie się" slajdu (1000 ms)
};

const startInterval = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  changeSlide();
};

let indexInterval = setInterval(startInterval, time); // musi być let!!!!

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    active = index;
    changeSlide();
    clearInterval(indexInterval);
    indexInterval = setInterval(startInterval, time);
  });
});

const dragStart = (e) => {
  isDragging = true;
  startX = e.type === 'touchstart' ? e.touches[0].clientX : e.pageX;
  clearInterval(indexInterval);
};

const dragging = (e) => {
  if (!isDragging) return;

  currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.pageX;
  diffX = currentX - startX;

  if (Math.abs(diffX) > 50) {
    if (diffX < 0) {
      active = (active + 1) % slideList.length;
    } else {
      active = (active - 1 + slideList.length) % slideList.length;
    }
    changeSlide();
    isDragging = false;
    indexInterval = setInterval(startInterval, time);
  }
};

const dragStop = () => {
  isDragging = false;
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);
document.addEventListener('mouseup', dragStop);
document.addEventListener('touchend', dragStop);
