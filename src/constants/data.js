import images from './images';

const wines = [
  {
    title: 'Fresh lime',
    price: '250 pkr',
    tags: 'AU | Bottle',
  },
  {
    title: 'Margaritta',
    price: '200 pkr',
    tags: 'AU | Bottle',
  },
  {
    title: 'Mine Water',
    price: '100 pkr',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Coke',
    price: '150 pkr',
    tags: 'CP | 750 ml',
  },
  {
    title: 'Sprite',
    price: '150 pkr',
    tags: 'S7 | 750 ml',
  },
  {
    title: 'Marinda',
    price: '150 pkr',
    tags: 'FM | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Pizza Flavors',
    price: '500-1499 pkr',
    tags: 'Chiken Fajita | Tikka| Chapli | Barb',
  },
  {
    title: "  Grilled Pizza",
    price: '650-999 pkr',
    tags: 'Beef grill | Chicken grill | Egg fried ',
  },
  {
    title: 'City Special',
    price: '490-900 pkr',
    tags: 'Rum | Citrus | Sugarfree',
  },
  {
    title: 'Vege Pizza',
    price: '540-1200 pkr',
    tags: 'Bourbon | Vegetables | Angostura',
  },

];
const BBQ = [
  {
    title: 'Grilled Burger',
    price: '500-1499 pkr',
    tags: 'Chiken| Tikka | Barb',
  },
  {
    title: "  Simple Burger",
    price: '350-999 pkr',
    tags: 'Beef | Chicken | Egg fried',
  },
  {
    title: 'Egg Burger',
    price: '450-900 pkr',
    tags: 'Shami burger | Omellete burger',
  },


];
const Desi = [
  {
    title: 'Chicken Karhai',
    price: '400-999 pkr',
    tags: 'White Chiken | Chicken handi| Qorma',
  },
  {
    title: "  Beef Karhai",
    price: '350-999 pkr',
    tags: 'White Beef | Beef handi | Beef Qorma',
  },
  {
    title: 'Mutton Karhai',
    price: '750-1800 pkr',
    tags: 'Mutton Handi | Mutton White | Cream',
  },


];
const burgers = [
  {
    title: 'Grilled Burgers',
    price: '500-1499 pkr',
    tags: 'Chiken Fajita | Tikka| Chapli | Barb',
  },
  {
    title: "  Grilled Burgers",
    price: '350-999 pkr',
    tags: 'Beef grill | Chicken grill | Egg fried',
  },
  {
    title: 'Daiquiri',
    price: '450-900 pkr',
    tags: 'Rum | Citrus juice | Sugar',
  },


];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: '',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: '',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: '',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '',
  },
];

export default { wines, cocktails, BBQ, Desi, burgers, awards };
