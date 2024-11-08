import '../components/nav';
import '../components/contact';
import '../components/heading';
import '../sass/index.scss';
import createPageHeader from '../components/heading';
import imgTort1 from '../images/torty/tort-urodzinowy.jpg';
import imgTort2 from '../images/torty/tort-weselny.jpg';
import imgTort3 from '../images/torty/tort-komunijny.jpg';
import imgTort4 from '../images/torty/tort-czekoladowy.jpg';
import imgCiasto1 from '../images/ciasta/ciasto-wzka.jpg';
import imgCiasto2 from '../images/ciasta/ciasto-biszkopt.jpg';
import imgCiasto3 from '../images/ciasta/ciasto-jablkowe.jpg';
import imgCiasto4 from '../images/ciasta/ciasto-kukulka.jpg';
import imgCiasto5 from '../images/ciasta/ciasto-marchewkowe.jpg';
import imgCiasto6 from '../images/ciasta/ciasto-orzechowe.jpg';
import imgCiasto7 from '../images/ciasta/ciasto-piernik.jpg';
import imgCiasto8 from '../images/ciasta/ciasto-pychotka.jpg';
import imgCiasto9 from '../images/ciasta/ciasto-sernik.jpg';
import imgCiasto10 from '../images/ciasta/ciasto-sliwiaczek.jpg';
import imgCiastka1 from '../images/ciastka/ciastka-galaretka.jpg';
import imgCiastka2 from '../images/ciastka/ciastka-gwiazdki.jpg';
import imgCiastka3 from '../images/ciastka/ciastka-kakaowe.jpg';
import imgCiastka4 from '../images/ciastka/ciastka-makaroniki.jpg';
import imgCiastka5 from '../images/ciastka/ciastka-maslane.jpg';
import imgCiastka6 from '../images/ciastka/ciastka-pieguski.jpg';
import imgCiastka7 from '../images/ciastka/ciastka-pierniki.jpg';
import imgDrozdzowki1 from '../images/drozdzowki/drozdzowka-croissant.jpg';
import imgDrozdzowki2 from '../images/drozdzowki/drozdzowka-cynamonka.jpg';
import imgDrozdzowki3 from '../images/drozdzowki/drozdzowka-jagody.jpg';
import imgDrozdzowki4 from '../images/drozdzowki/drozdzowka-paczek.jpg';
import imgDrozdzowki5 from '../images/drozdzowki/drozdzowka-warkocz.jpg';
import imgPieczywo1 from '../images/pieczywo/pieczywo-chleb.jpg';
import imgPieczywo2 from '../images/pieczywo/pieczywo-paluszki.jpg';

const completeOffer = [
  {
    type: 'torty',
    name: 'Torty urodzinowe',
    img: imgTort1,
    alt: 'Urodzinowy tort z owocami, na którym palą się kolorowe świeczki',
    text: 'Wybór smaku oraz dekoracji tortu należą do klienta',
  },
  {
    type: 'torty',
    name: 'Torty weselne',
    img: imgTort2,
    alt: 'Fragment białego tortu weselnego ozdobionego cukrowymi, jasnoróżowymi różami',
    text: 'Wybór smaku oraz dekoracji tortu należą do klienta',
  },
  {
    type: 'torty',
    name: 'Torty komunijne',
    img: imgTort3,
    alt: 'Piętrowym biały torcik komunijny ozdobiony białymi sercami i fioletowymi różyczkami',
    text: 'Wybór smaku oraz dekoracji tortu należą do klienta',
  },
  {
    type: 'torty',
    name: 'Torty okazjonalne',
    img: imgTort4,
    alt: 'Kawałek czekoladowego tortu na talerzyku, obsypanego białą i brązową czekoladą.',
    text: 'Wybór smaku oraz dekoracji tortu należą do klienta',
  },
  {
    type: 'ciasta',
    name: 'WZ-ka',
    img: imgCiasto1,
    alt: 'Ciasto z czekoladowego biszkoptu przekładanego bitą śmietaną obsypane bakaliami',
    text: 'Kakaowy biszkopt z bitą śmietaną i owocami',
  },
  {
    type: 'ciasta',
    name: 'Biszkopt z owocami',
    img: imgCiasto2,
    alt: 'Biszkopt z bitą śmietaną i truskawkami',
    text: 'Jasny biszkopt z bitą śmietaną i owocami',
  },
  {
    type: 'ciasta',
    name: 'Szarlotka',
    img: imgCiasto3,
    alt: 'Porcja szrlotki z bitą śmietaną na talerzyku',
    text: 'Tradycyjne ciasto z jabłkami',
  },
  {
    type: 'ciasta',
    name: 'Kukułka',
    img: imgCiasto4,
    alt: 'Porcja kukułki na talerzyku',
    text: 'Jasny i ciemny biszkopt nasączony czekoladowym ponczem',
  },
  {
    type: 'ciasta',
    name: 'Ciasto marchewkowe',
    img: imgCiasto5,
    alt: 'Ciasto marchewkowe polane lukrem i udekorowane cukrowymi marchewkami',
    text: 'Ciasto z tartą marchewką, która z korzennymi przyprawami tworzy idealne połączenie',
  },
  {
    type: 'ciasta',
    name: 'Ciasto orzechowe',
    img: imgCiasto6,
    alt: 'Ciasto orzechowe na talerzyku, pokrojone na kawałki',
    text: 'Czekoladowy biszkopt przekłądamy masą orzechową posypany orzechami',
  },
  {
    type: 'ciasta',
    name: 'Piernik',
    img: imgCiasto7,
    alt: 'Porcja piernika przekładanego powidłem śliwkowym na drewnianym talerzyku, z widelcem',
    text: 'Tradycyjny piernik przekładany powidłem śliwkowym',
  },
  {
    type: 'ciasta',
    name: 'Pychotka',
    img: imgCiasto8,
    alt: 'Kilka kawałków pychotki na szklanej paterze',
    text: 'Blaty kruchego ciasta z dżemem, bezą i płatkami migdałowymi, przełożone kremem maślano-budyniowym',
  },
  {
    type: 'ciasta',
    name: 'Sernik',
    img: imgCiasto9,
    alt: 'Porcja sernika potrzepanego cukrem pudrem na porcelanowym talerzyku',
    text: 'Tradycyjny sernik potrzepany cukrem pudrem',
  },
  {
    type: 'ciasta',
    name: 'Śliwiaczek',
    img: imgCiasto10,
    alt: 'Ciasto ze śliwkami na wierzchu',
    text: 'Drożdżowe ciasto ze śliwami',
  },

  {
    type: 'ciastka',
    name: 'Ciastka z galaretką',
    img: imgCiastka1,
    alt: 'Ciastka z galaretką na talerzu',
    text: 'Ciastka maślane z owocową galaretką',
  },
  {
    type: 'ciastka',
    name: 'Owsiane gwiazdki',
    img: imgCiastka2,
    alt: 'Owsiane ciasteczka gwiazdki oblane lukrem na kamiennej tacy',
    text: 'Owsiane ciasteczka polane białym lukrem',
  },
  {
    type: 'ciastka',
    name: 'Kakaowe',
    img: imgCiastka3,
    alt: 'Kruche, czekoladowe ciasteczko posypane cukrem pudrem',
    text: 'Kruche, czekoladowe ciastka z kawałkami czekolady',
  },
  {
    type: 'ciastka',
    name: 'Makaroniki',
    img: imgCiastka4,
    alt: 'Makaroniki z truskawkowym nadzieniem ułożone w miseczce',
    text: 'Bezowe ciasteczka migdałowe z truskawkowym nadzieniem',
  },
  {
    type: 'ciastka',
    name: 'Ciasteczka maślane',
    img: imgCiastka5,
    alt: 'Ciasteczka maślane o różnych kształtach',
    text: 'Tradycyjne, najpyszniejsze ciasteczka maślane',
  },
  {
    type: 'ciastka',
    name: 'Pieguski',
    img: imgCiastka6,
    alt: 'Ciastka pieguski z czekoladą',
    text: 'Kruche pieguski z kawałkami czekolady',
  },
  {
    type: 'ciastka',
    name: 'Pierniczki',
    img: imgCiastka7,
    alt: 'Kruche pierniczki o różnych kształtach',
    text: 'Wyśmienite korzenne pierniczki',
  },
  {
    type: 'drozdzowki',
    name: 'Croissanty',
    img: imgDrozdzowki1,
    alt: 'Croissanty na blaszcze',
    text: 'Tradycyjne maślane rogaliki z ciasta francuskiego',
  },
  {
    type: 'drozdzowki',
    name: 'Cynamonki',
    img: imgDrozdzowki2,
    alt: 'Dwie okrągłe drożdżówki cynamonki na talerzu',
    text: 'Pyszne drożdżówki z cynamonem',
  },
  {
    type: 'drozdzowki',
    name: 'Jagodzianki',
    img: imgDrozdzowki3,
    alt: 'Drożdżówka posypana kruszonką na talerzyku',
    text: 'Drożdżówki z jagodami posypane kruszonką',
  },
  {
    type: 'drozdzowki',
    name: 'Pączki',
    img: imgDrozdzowki4,
    alt: 'Pączki polane lukrem i posypane skórką z pomarańczy',
    text: 'Tradycyjne pączki z marmoladą polane lukrem i posypane skórką pomarańczy',
  },
  {
    type: 'drozdzowki',
    name: 'Warkocze',
    img: imgDrozdzowki5,
    alt: 'Drożdżówka warkocz z serem, makiem i marmoladą',
    text: 'Drożdżówka z serem, makiem i marmoladą',
  },
  {
    type: 'pieczywo',
    name: 'Chleb żytni',
    img: imgPieczywo1,
    alt: 'Rozkrojony ciemny chleb na desce',
    text: 'Dietetyczny chleb żytni z przepisu naszej babci',
  },
  {
    type: 'pieczywo',
    name: 'Paluchy',
    img: imgPieczywo2,
    alt: 'Kruche paluchy w papierowych workach',
    text: 'Kruche paluchy z ciasta francuskiego',
  },
];

createPageHeader('.offer-header', 'Oferta');

const tabs = document.querySelectorAll('.tabcontent');
const buttons = document.querySelectorAll('.tablink');

function openTab(tabId) {
  tabs.forEach(
    (tab) => (tab.style.display = tab.id === tabId ? 'block' : 'none')
  );
  buttons.forEach((button) => {
    const isActive = button.getAttribute('data-name') === tabId;
    button.style.backgroundColor = isActive ? 'var(--secondary-color)' : '';
    button.classList.toggle('active', isActive);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.substring(1);
  openTab(hash || 'oferta-torty'); // Domyślna zakładka, jeśli hash nie istnieje
});

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const tabId = this.getAttribute('data-name');
    openTab(tabId);

    // Aktualizuj URL bez przeładowania strony
    // history.replaceState(null, null, `#${tabId}`);
  });
});

document.getElementById('open-default').click();

function createOfferCard(idType, type) {
  const tabcontent = document.getElementById(idType);
  const cardWrapper = tabcontent.querySelector('.tabcontent__wrapper');

  completeOffer
    .filter((offerCard) => offerCard.type === type)
    .forEach((offerCard) => {
      const card = document.createElement('div');
      card.classList.add('tabcontent__card');
      card.innerHTML = `
  <img
                  class="tabcontent__card-img"
                  src=${offerCard.img}
                  alt=${offerCard.alt}
                />
                <div class="tabcontent__card-wrapper">
                  <h3 class="tabcontent__card-title">${offerCard.name}</h3>
                  <p class="tabcontent__card-text">
                    ${offerCard.text}
                  </p>
                </div>
  `;
      cardWrapper.appendChild(card);
    });
}

createOfferCard('oferta-torty', 'torty');
createOfferCard('oferta-ciasta', 'ciasta');
createOfferCard('oferta-ciastka', 'ciastka');
createOfferCard('oferta-drozdzowki', 'drozdzowki');
createOfferCard('oferta-pieczywo', 'pieczywo');
