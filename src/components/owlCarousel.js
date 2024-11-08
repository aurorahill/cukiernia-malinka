const initializeSlider = (
  sliderSelector,
  arrowsSelector,
  cardSelector,
  dotsSelector,
  time
) => {
  const slider = document.querySelector(sliderSelector);
  const arrows = document.querySelectorAll(arrowsSelector);
  const card = document.querySelector(cardSelector);
  const dots = [...document.querySelectorAll(dotsSelector)];
  const sliderChildren = [...slider.children];

  let isDragging = false,
    startX,
    startScrollLeft,
    isAutoPlay = true,
    active = 0,
    timeoutId,
    scrollTimeout;

  const cardWidth = card.offsetWidth;
  const cardPerView = Math.round(slider.offsetWidth / cardWidth);

  sliderChildren
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      slider.insertAdjacentHTML('afterbegin', card.outerHTML);
    });

  sliderChildren.slice(0, cardPerView).forEach((card) => {
    slider.insertAdjacentHTML('beforeend', card.outerHTML);
  });

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      slider.scrollLeft += arrow.id === 'left' ? -cardWidth : cardWidth;
      handleInfiniteScroll();
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    slider.classList.add('dragging');
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = slider.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    slider.scrollLeft = startScrollLeft - (x - startX);
  };

  const dragStop = () => {
    isDragging = false;
    slider.classList.remove('dragging');
    handleInfiniteScroll();
  };

  const handleInfiniteScroll = () => {
    const maxScrollLeft = slider.scrollWidth - slider.offsetWidth;

    // Przechodzenie na koniec/początek bez przeskoku
    if (slider.scrollLeft <= 0) {
      slider.classList.add('no-transition');
      slider.scrollLeft = maxScrollLeft - cardWidth;
      slider.classList.remove('no-transition');
    } else if (slider.scrollLeft >= maxScrollLeft) {
      slider.classList.add('no-transition');
      slider.scrollLeft = cardWidth;
      slider.classList.remove('no-transition');
    }

    updateActiveCard();
    changeDot();
  };

  const changeDot = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === active);
    });
  };

  const updateActiveCard = () => {
    const currentIndex = Math.round(slider.scrollLeft / cardWidth);
    active =
      (currentIndex - cardPerView + sliderChildren.length) %
      sliderChildren.length;
  };

  const autoPlay = () => {
    if (window.innerWidth < 992 || !isAutoPlay) return;
    timeoutId = setInterval(() => {
      slider.scrollLeft += cardWidth;
      handleInfiniteScroll();
    }, time);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      active = index;
      slider.scrollLeft = (active + cardPerView) * cardWidth;
      changeDot();
    });
  });

  autoPlay();

  slider.addEventListener('mousedown', dragStart);
  slider.addEventListener('mousemove', dragging);
  slider.addEventListener('touchstart', dragStart);
  slider.addEventListener('touchmove', dragging);
  document.addEventListener('mouseup', dragStop);
  document.addEventListener('touchend', dragStop);
  slider.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleInfiniteScroll, 100);
  });

  slider.addEventListener('mouseenter', () => clearInterval(timeoutId));
  slider.addEventListener('mouseleave', autoPlay);
};

export default initializeSlider;
