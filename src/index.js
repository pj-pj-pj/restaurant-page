import favicon from './assets/rolling-pin.png';
import homepageInit from './homepage';

document.querySelector("link[rel~='icon']").href = favicon;
homepageInit();

const currentPage = {
  home: true,
  menu: false,
  contact: false,
};

const content = document.querySelector('div#content');
const navbar = document.querySelector('.navbar');
navbar.addEventListener('click', (e) => {
  if (!currentPage.home && e.target.textContent === 'Home') {
    clearContent();
    currentPage.home = true;
    currentPage.menu = false;
    currentPage.contact = false;
  }

  if (!currentPage.menu && e.target.textContent === 'Menu') {
    clearContent();
    currentPage.home = false;
    currentPage.menu = true;
    currentPage.contact = false;
  }

  if (!currentPage.contact && e.target.textContent === 'Contact Us') {
    clearContent();
    currentPage.home = false;
    currentPage.menu = false;
    currentPage.contact = true;
  }
});

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
