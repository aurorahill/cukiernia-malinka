import initializeSlider from './owlCarousel';
import welcome from './welcome';

const testimonials = [
  {
    name: 'Karolina Zapszała',
    stars: 5,
    source: 'Google',
    content: `Zamówilismy ciasto wraz z Tortem w cukierni Malinka na wesele. Tort byl rewelacyjny lekki, delikatny idealny. Pieknie udekorowany według naszych zyczen 🤩. Ciasta na stolach oraz dla gosci pyszne. Polecamy serdecznie wszytskim 💪💪🥧🥮🎂🍪🧁🍩🧁`,
  },
  {
    name: 'Agnieszka Pociask',
    stars: 5,
    source: 'Google',
    content: `Pyszne wyroby cukiernicze. Ciasta, ciasteczka. Szczególnie te małe babeczki.`,
  },
  {
    name: 'Zbigniew Kiszka',
    stars: 4,
    source: 'Google',
    content: `Dobre ciastka ciasto wiejskie pycha regionalne słynna cukiernia na Podkarpaciu jak tu jestem zabieram pół bagażnika`,
  },
  {
    name: 'Mariola Wrobel',
    stars: 5,
    source: 'Google',
    content: `Lubię tutejsze wyroby. Cenowo też jest ok. Poza ciastami można kupić produkty spożywcze lub gazety 🙂`,
  },
];

// Tworzenie kart z opinią
const createTestimonialCard = () => {
  const list = document.querySelector(
    '.testimonials__slider .slider__card-list'
  );
  const dots = document.querySelector('.testimonials__slider .slider__dots');

  testimonials.forEach((testimonial) => {
    const card = document.createElement('div');
    card.classList.add('slider__card-item');
    card.innerHTML = `
                <h3 class="slider__name">${testimonial.name}</h3>
                <p class="slider__stars">${'<i class="fa-solid fa-star"></i>'.repeat(testimonial.stars)}${'<i class="fa-regular fa-star"></i>'.repeat(5 - testimonial.stars)}</p>
                <p class="slider__opinion-source">Review from ${testimonial.source}</p>
                <p class="slider__opinion">
                  ${testimonial.content}
                </p>`;
    list.appendChild(card);
    const dot = document.createElement('span');
    dots.appendChild(dot);
  });
};

createTestimonialCard();

//Uruchamianie slidera
window.addEventListener('DOMContentLoaded', () => {
  initializeSlider(
    '.testimonials__slider .slider__card-list',
    '.testimonials__slider .slider__arrow',
    '.testimonials__slider .slider__card-item',
    '.testimonials__slider .slider__dots span',
    5000
  );
});

//Zapraszamy box
welcome();
