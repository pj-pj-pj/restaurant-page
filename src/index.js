import favicon from './assets/rolling-pin.png';
import homepageInit from './homepage';
import menuInit from './menupage';
import contactInit from './contactpage.js';

document.querySelector("link[rel~='icon']").href = favicon;

homepageInit();
footerInit();

let currentPage = 'home';

const navbar = document.querySelector('.navbar');
const hr = document.createElement('hr');
hr.className = 'active-page';
document.querySelector(`.${currentPage}`).append(hr);

navbar.addEventListener('mouseover', (e) => {
  if (e.target.className != 'navbar' && !e.target.contains(hr)) {
    e.target.appendChild(hr);
  }
});

navbar.addEventListener('mouseout', (e) => {
  if (e.target.textContent != 'navbar' && !e.target.contains(hr)) {
    e.target.removeChild(hr);
  }
  document.querySelector(`.${currentPage}`).append(hr);
});

navbar.addEventListener('click', (e) => changeContent(e.target.textContent));

export function changeContent(e) {
  if (currentPage != 'home' && e === 'Home') {
    clearContent();
    homepageInit();
    currentPage = 'home';
  }

  if (currentPage != 'menu' && e === 'Menu') {
    clearContent();
    menuInit();
    currentPage = 'menu';
  }

  if (currentPage != 'contact' && e === 'Contact Us') {
    clearContent();
    contactInit();
    currentPage = 'contact';
  }

  document.querySelector(`.${currentPage}`).append(hr);
}

function clearContent() {
  const content = document.querySelector('div#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

export function unchild(parent) {
  var child = parent.firstChild;
  while (child) {
    child.remove();
    child = parent.firstChild;
  }
}

function footerInit() {
  const footer = document.createElement('footer');
  const body = document.querySelector('body');
  const credit = document.createElement('a');
  credit.href = 'https://www.flaticon.com/free-icons/bread';
  credit.target = '_blank';
  credit.textContent =
    'Bread & Social Media Icons created by Freepik - Flaticon';
  const creditButMe = document.createElement('p');
  creditButMe.textContent = 'Copyright © 2023 by PJ';

  footer.append(credit, creditButMe);
  body.appendChild(footer);
}
