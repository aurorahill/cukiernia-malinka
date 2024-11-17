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
    active = 0, // to track active card
    timeuotId;

  let cardWidth = card.offsetWidth;
  let cardPerView = Math.round(slider.offsetWidth / cardWidth);

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
      arrow.id == 'left'
        ? (slider.scrollLeft -= cardWidth)
        : (slider.scrollLeft += cardWidth);
      updateActiveCard();
      changeDot();
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    slider.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    slider.classList.remove('dragging');
    updateActiveCard();
    changeDot();
  };

  const dragging = (e) => {
    if (!isDragging) return;
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const infiniteScroll = () => {
    if (slider.scrollLeft === 0) {
      slider.classList.add('no-transition');
      slider.scrollLeft = slider.scrollWidth - 2 * slider.offsetWidth;
      slider.offsetHeight;
      slider.classList.remove('no-transition');
    } else if (
      Math.ceil(slider.scrollLeft) ===
      slider.scrollWidth - slider.offsetWidth
    ) {
      slider.classList.add('no-transition');
      slider.scrollLeft = slider.offsetWidth;
      slider.offsetHeight;
      slider.classList.remove('no-transition');
    }

    clearTimeout(timeuotId);
    if (!slider.matches(':hover')) autoPlay();
    updateActiveCard();
    changeDot();
  };

  const changeDot = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === active);
    });
  };

  const updateActiveCard = () => {
    const scrolledCards = Math.round(slider.scrollLeft / cardWidth);
    active =
      (scrolledCards - 1 + sliderChildren.length) % sliderChildren.length;
  };

  const autoPlay = () => {
    if (window.innerWidth < 992 || !isAutoPlay) return;
    timeuotId = setInterval(() => {
      slider.scrollLeft += cardWidth;
      updateActiveCard();
      changeDot();
    }, time);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      active = index;
      slider.scrollLeft = (active + 1) * cardWidth;
      changeDot();
    });
  });

  autoPlay();

  slider.addEventListener('mousedown', dragStart);
  slider.addEventListener('mousemove', dragging);
  document.addEventListener('mouseup', dragStop);
  slider.addEventListener('scroll', infiniteScroll);
  slider.addEventListener('mouseenter', () => {
    clearInterval(timeuotId);
  });
  slider.addEventListener('mouseleave', autoPlay);
};

export default initializeSlider;
