import bcgImage from '../images/pie-bcg-small.png';

const createPageHeader = (headerClass, title) => {
  const header = document.querySelector(headerClass);
  header.innerHTML = `
        <div class="page-header__wrapper">
          <h1 class="page-header__title">${title}</h1>
          <a
            class="page-header__link"
            href="../index.html"
            >Powrót na stronę główną</a
          >
        </div>
        `;
  header.style.backgroundImage = `url(${bcgImage})`;
};

export default createPageHeader;
