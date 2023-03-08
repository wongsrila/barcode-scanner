import indexGet from '../controllers/indexController.js';
import scannerGet from '../controllers/scannerController.js';
import resultsGet from '../controllers/resultsController.js';
import editGet from '../controllers/editController.js';
import createAccountGet from '../controllers/createAccountController.js';

routie({
  '': () => {
    indexGet();
  },
  scanner: () => {
    scannerGet();
  },
  'results/:barcode': (barcode) => {
    resultsGet(barcode);
  },
  'edit/:id': (id) => {
    editGet(id);
  },
  'create-account': () => {
    createAccountGet();
  },
});

export default routie;
