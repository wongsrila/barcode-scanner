const mainEl = document.querySelector('main');

routie('scanner', function () {
  let x = mainEl;
  x.style.display = 'block';
});

export default routie;
