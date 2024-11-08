const navList = document.querySelector('.nav__list');
import navLogo from '../images/logo-white-small.png';
import navBtn from '../images/main-menu.png';

document.querySelector('.main').addEventListener('click', () => {
  if (navList.classList.contains('show')) {
    navList.classList.remove('show');
  }
});

const showMenu = () => {
  navList.classList.toggle('show');
};

document.querySelector('.nav__menu-btn').addEventListener('click', showMenu);

document.querySelector('.nav__logo-image').src = navLogo;
document.querySelector('.nav__menu-btn-image').src = navBtn;
