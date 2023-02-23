const stopScanner = document.getElementById('stop');
const result = document.getElementById('result');

const html5QrCode = new Html5Qrcode('reader');

const config = { fps: 20, qrbox: { width: 200, height: 200 } };

html5QrCode
  .start({ facingMode: 'environment' }, config, (decodedData) => {
    gotData(decodedData);
    // console.log(decodedData);
  })
  .catch((err) => {
    console.log(err);
  });

stopScanner.addEventListener('click', () => {
  html5QrCode
    .stop()
    .then((ignore) => {})
    .catch((err) => {});
});

function gotData(decodedData) {
  fetch(`https://world.openfoodfacts.org/api/v0/product/${decodedData}.json`)
    .then((response) => response.json())
    .then((data) => dataInfo(data))
    .catch((error) => {
      console.error('There was an error!', error);
    });
}

function dataInfo(decodedData) {
  // console.log(decodedData.product.product_name);
  result.innerHTML = decodedData.product.product_name;
}

export { gotData };
