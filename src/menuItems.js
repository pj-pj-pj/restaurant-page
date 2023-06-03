import baguette from './assets/baguette.jpg';
import cinnamonToast from './assets/cinnamonToast.jpg';
import sourdoughBoule from './assets/sourdoughBoule.jpg';
import focaccia from './assets/focaccia.jpg';
import naan from './assets/naan.jpg';
import ciabatta from './assets/ciabatta.jpg';
import pita from './assets/pita.jpg';
import brioche from './assets/brioche.jpg';
import wholeGrainLoaf from './assets/wholeGrainLoaf.jpg';
import challah from './assets/challah.jpg';

const items = [];

function createMenuItem(name, price, description, picture) {
  return {
    name,
    price,
    description,
    picture,
  };
}

(function addItems() {
  items.push(
    createMenuItem(
      'Baguette Sandwich',
      '$8.99',
      'Freshly baked baguette filled with a combination of meats, cheeses, and veggies.',
      baguette
    )
  );
  items.push(
    createMenuItem(
      'Cinnamon Raisin Toast',
      '$3.99',
      'Slices of toasted bread, sprinkled with cinnamon and topped with plump raisins.',
      cinnamonToast
    )
  );

  items.push(
    createMenuItem(
      'Sourdough Boule',
      '$6.99',
      'A round artisan bread with a tangy flavor and a crusty exterior.',
      sourdoughBoule
    )
  );
  items.push(
    createMenuItem(
      'Focaccia',
      '$7.99',
      'A fluffy and savory Italian bread topped with herbs, olive oil, and sea salt.',
      focaccia
    )
  );
  items.push(
    createMenuItem(
      'Naan Bread',
      '$5.99',
      'Soft and pillowy Indian bread perfect for dipping in curries and sauces.',
      naan
    )
  );
  items.push(
    createMenuItem(
      'Ciabatta',
      '$6.99',
      'An Italian bread with a chewy texture and large air pockets, ideal for sandwiches.',
      ciabatta
    )
  );
  items.push(
    createMenuItem(
      'Pita Bread',
      '$4.99',
      'Thin and pocketed bread commonly used in Mediterranean and Middle Eastern cuisine.',
      pita
    )
  );
  items.push(
    createMenuItem(
      'Brioche',
      '$5.99',
      'A rich and buttery bread often used for making sweet treats like French toast.',
      brioche
    )
  );
  items.push(
    createMenuItem(
      'Whole Grain Loaf',
      '$6.99',
      'A hearty bread made with whole wheat flour and packed with nutritious grains.',
      wholeGrainLoaf
    )
  );
  items.push(
    createMenuItem(
      'Challah',
      '$7.99',
      'A braided Jewish bread with a slightly sweet taste.',
      challah
    )
  );
})();

export default items;
