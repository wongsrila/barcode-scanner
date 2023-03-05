const app = document.querySelector('.app');

const scannerGet = () => {
  // makes the index for the localstorage key
  let dataLength = Object.keys(localStorage).length;
  let dataItemIndex = dataLength + 1;

  const markup = `
    <main>
      <div id="reader"></div>
    </main>
  `;
  app.innerHTML = markup;

  const html5QrCode = new Html5Qrcode('reader');
  const config = { fps: 20, qrbox: { width: 150, height: 150 } };

  html5QrCode
    .start({ facingMode: 'environment' }, config, (decodedData) => {
      markupData(decodedData);
      // console.log(typeof decodedData);
    })
    .catch((err) => {
      console.log(err);
    });

  const markupData = (decodedData) => {
    localStorage.setItem(dataItemIndex, decodedData);
    routie('results');
  };
};

export default scannerGet;
