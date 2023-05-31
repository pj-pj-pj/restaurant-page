import './style.css';
import favicon from './assets/rolling-pin.png';
import basket from './assets/basket.png';

export default function homepageInit() {
  // home page
  const content = document.querySelector('div#content');

  //header
  const header = document.createElement('header');
  const icon = new Image();
  icon.src = favicon;
  const navbar = document.createElement('ul');
  navbar.className = 'navbar';
  const home = document.createElement('li');
  home.textContent = 'Home';
  const menu = document.createElement('li');
  menu.textContent = 'Menu';
  const contact = document.createElement('li');
  contact.textContent = 'Contact Us';
  const hr = document.createElement('hr');
  hr.className = 'active-page';
  home.append(hr);
  navbar.addEventListener('mouseover', (e) => {
    if (e.target.className != 'navbar') {
      e.target.appendChild(hr);
    }
  });
  navbar.addEventListener('mouseout', (e) => {
    if (e.target.textContent !== 'Home') {
      e.target.removeChild(hr);
    }
  });

  //main
  const main = document.createElement('main');
  const mainText = document.createElement('div');
  mainText.className = 'text';
  const buredu = document.createElement('h1');
  buredu.className = 'buredu';
  buredu.textContent = 'ブレドゥ';
  const bigImg = new Image();
  bigImg.src = basket;
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
  headline.append(headOne, headTwo, headThree, welcome, brdbtn);
  mainText.append(buredu, line, headline);

  // Experience the warm embrace of BREADS, where each bite is a heartfelt expression of love from the bakery realm

  //footer
  const footer = document.createElement('footer');
  footer.innerHTML =
    '<a href="https://www.flaticon.com/free-icons/bread" target="_blank" title="bread icons">Bread icons created by Freepik - Flaticon</a>';

  content.append(header, main, footer);
  header.append(icon, navbar);
  navbar.append(home, menu, contact);
  main.append(mainText, bigImg);
}
