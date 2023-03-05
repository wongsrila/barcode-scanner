import indexGet from '../controllers/indexController.js';
import resultsGet from '../controllers/resultsController.js';
import scannerGet from '../controllers/scannerController.js';

routie({
  '': () => {
    indexGet();
  },
  scanner: () => {
    scannerGet();
  },
  results: () => {
    resultsGet();
  },
});

export default routie;
