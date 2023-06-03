import './style.css';
import { changeContent } from './index.js';
import favicon from './assets/rolling-pin.png';
import basket from './assets/basket.png';

const content = document.querySelector('div#content');

export default function init() {
  headerInit();
  content.append(main);
}

const header = document.createElement('header');
const icon = new Image();
const navbar = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');

export function headerInit() {
  icon.src = favicon;
  navbar.className = 'navbar';
  home.textContent = 'Home';
  home.className = 'home';
  menu.textContent = 'Menu';
  menu.className = 'menu';
  contact.textContent = 'Contact Us';
  contact.className = 'contact';

  content.append(header);
  header.append(icon, navbar);
  navbar.append(home, menu, contact);
}

const main = document.createElement('main');
(function mainInit() {
  const mainText = document.createElement('div');
  mainText.className = 'text';

  const buredu = document.createElement('h1');
  buredu.className = 'buredu';
  buredu.textContent = 'ブレドゥ';

  const bigImg = new Image();
  bigImg.src = basket;
  bigImg.className = 'home-img';

  const line = document.createElement('div');
  line.className = 'line';

  const headline = document.createElement('div');
  headline.className = 'headline';
  const headOne = document.createElement('h1');
  headOne.textContent = 'A LOAF OF LOVE';
  const headTwo = document.createElement('h1');
  headTwo.textContent = 'FROM THE BAKERY REALM';
  const headThree = document.createElement('h1');
  headThree.textContent = 'FOR YOU';

  const welcome = document.createElement('p');
  welcome.innerHTML =
    'Welcome to BREADS, a gastronomic haven where artisanal breads take center stage, offering a delectable symphony of flavors and textures for bread enthusiasts.';

  const brdbtn = document.createElement('button');
  brdbtn.textContent = 'Get Bread';
  brdbtn.className = 'get-bread';
  headline.append(headOne, headTwo, headThree, welcome, brdbtn);
  mainText.append(buredu, line, headline);

  brdbtn.addEventListener('click', () => {
    changeContent('Menu');
  });

  main.append(mainText, bigImg);
})();
