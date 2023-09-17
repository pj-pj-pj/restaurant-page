import './style.css';
import { headerInit } from './homepage';
import items from './menuItems';
import { unchild } from './index.js';

const content = document.querySelector('div#content');
const main = document.createElement('main');
main.setAttribute('id', 'menu');

export default function init() {
  headerInit();
  displayMenu();
  content.append(menuHeader, main);
}

const menuHeader = document.createElement('div');
menuHeader.setAttribute('id', 'menu-header');
(function menuHeaderInit() {
  const header = document.createElement('h1');
  header.textContent = 'BREADS MENU';
  const line = document.createElement('div');
  line.className = 'line';
  menuHeader.append(header, line);
})();

function displayMenu() {
  unchild(main);
  console.log('hi');

  for (let item of items) {
    const itemHolder = document.createElement('div');
    itemHolder.className = 'menu-item';
    const itemDetails = document.createElement('div');
    itemDetails.className = 'item-details';
    const itemPic = new Image();
    itemPic.src = item.picture;
    const itemName = document.createElement('h4');
    itemName.textContent = item.name;
    itemName.className = 'name';
    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemPrice.className = 'price';
    const itemDesc = document.createElement('p');
    itemDesc.textContent = item.description;
    itemDesc.className = 'desc';

    itemDetails.append(itemName, itemPrice, itemDesc);
    itemHolder.append(itemPic, itemDetails);
    main.append(itemHolder);
  }
}
