import favicon from './assets/rolling-pin.png';
import homepageInit from './homepage';
import menuInit from './menupage';

document.querySelector("link[rel~='icon']").href = favicon;

homepageInit();
footerInit();

let currentPage = 'home';

const navbar = document.querySelector('.navbar');
const hr = document.createElement('hr');
hr.className = 'active-page';

document.querySelector(`.${currentPage}`).append(hr);

navbar.addEventListener('mouseover', (e) => {
  if (e.target.className != 'navbar') {
    e.target.appendChild(hr);
  }
});
navbar.addEventListener('mouseout', (e) => {
  if (e.target.textContent != 'navbar') {
    e.target.removeChild(hr);
  }

  document.querySelector(`.${currentPage}`).append(hr);
});

navbar.addEventListener('click', (e) => {
  changeContent(e);
});

function clearContent() {
  const content = document.querySelector('div#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function changeContent(e) {
  if (currentPage != 'Home' && e.target.textContent === 'Home') {
    clearContent();
    homepageInit();
    currentPage = 'home';
  }

  if (currentPage != 'Menu' && e.target.textContent === 'Menu') {
    clearContent();
    menuInit();
    currentPage = 'menu';
  }

  if (currentPage != 'Contact' && e.target.textContent === 'Contact Us') {
    clearContent();
    currentPage = 'contact';
  }

  document.querySelector(`.${currentPage}`).append(hr);
}

function footerInit() {
  const footer = document.createElement('footer');
  const body = document.querySelector('body');
  footer.innerHTML =
    '<a href="https://www.flaticon.com/free-icons/bread" target="_blank" title="bread icons">Bread icons created by Freepik - Flaticon</a>';
  body.appendChild(footer);
}
