import '../components/nav';
import '../components/contact';
import '../components/heading';
import '../sass/index.scss';
import createPageHeader from '../components/heading';
import welcome from '../components/welcome';

createPageHeader('.contact-header', 'Skontaktuj się z nami!');
welcome();
