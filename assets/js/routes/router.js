import indexGet from '../controllers/indexController.js';
import scannerGet from '../controllers/scannerController.js';
import resultsGet from '../controllers/resultsController.js';
import editGet from '../controllers/editController.js';
import createAccountGet from '../controllers/createAccountController.js';
import accountGet from '../controllers/accountController.js';

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
  account: () => {
    accountGet();
  },
});

export default routie;
