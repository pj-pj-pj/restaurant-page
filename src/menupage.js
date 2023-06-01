import './style.css';
import { headerInit } from './homepage';

const content = document.querySelector('div#content');

export default function init() {
  headerInit();

  const main = document.createElement('main');
  main.setAttribute('id', 'menu');
  const menuHeader = document.createElement('div');
  menuHeader.setAttribute('id', 'menu-header');
  const header = document.createElement('h1');
  header.textContent = 'BREADS MENU';
  const line = document.createElement('div');
  line.className = 'line';
  menuHeader.append(header, line);
  content.append(menuHeader);

  for (let item of items) {
    const itemHolder = document.createElement('div');
    itemHolder.className = 'menu-item';
    const itemName = document.createElement('h4');
    itemName.textContent = item.name;
    itemName.className = 'name';
    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemPrice.className = 'price';
    const itemDesc = document.createElement('p');
    itemDesc.textContent = item.description;
    itemDesc.className = 'desc';

    itemHolder.append(itemName, itemPrice, itemDesc);
    main.append(itemHolder);
  }

  content.appendChild(main);
}

function createMenuItem(name, price, description) {
  return {
    name,
    price,
    description,
  };
}

const items = [];
items.push(
  createMenuItem(
    'Baguette Sandwich',
    '$8.99',
    'Freshly baked baguette filled with a combination of meats, cheeses, and veggies.'
  )
);
items.push(
  createMenuItem(
    'Cinnamon Raisin Toast',
    '$3.99',
    'Slices of toasted bread, sprinkled with cinnamon and topped with plump raisins.'
  )
);

items.push(
  createMenuItem(
    'Sourdough Boule',
    '$6.99',
    'A round artisan bread with a tangy flavor and a crusty exterior.'
  )
);
items.push(
  createMenuItem(
    'Focaccia',
    '$7.99',
    'A fluffy and savory Italian bread topped with herbs, olive oil, and sea salt.'
  )
);
items.push(
  createMenuItem(
    'Naan Bread',
    '$5.99',
    'Soft and pillowy Indian bread perfect for dipping in curries and sauces.'
  )
);
items.push(
  createMenuItem(
    'Ciabatta',
    '$6.99',
    'An Italian bread with a chewy texture and large air pockets, ideal for sandwiches.'
  )
);
items.push(
  createMenuItem(
    'Pita Bread',
    '$4.99',
    'Thin and pocketed bread commonly used in Mediterranean and Middle Eastern cuisine.'
  )
);
items.push(
  createMenuItem(
    'Brioche',
    '$5.99',
    'A rich and buttery bread often used for making sweet treats like French toast.'
  )
);
items.push(
  createMenuItem(
    'Whole Grain Loaf',
    '$6.99',
    'A hearty bread made with whole wheat flour and packed with nutritious grains.'
  )
);
items.push(
  createMenuItem('Challah', '$7.99', 'A braided Jewish bread with a slightly sweet taste.')
);
