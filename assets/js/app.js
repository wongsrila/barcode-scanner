import routie from './modules/routes.js';
import { gotData } from './modules/barcodeScanner.js';

const app = async () => {
  routie();
};

document.addEventListener('DOMContentLoaded', app);
