import routie from './modules/routes.js';
import { gotData } from './modules/barcodeScanner.js';

const app = async () => {
  routie();
  // console.log(myFunction('First'));
};

document.addEventListener('DOMContentLoaded', app);
