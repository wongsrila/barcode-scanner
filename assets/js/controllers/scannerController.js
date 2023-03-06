const app = document.querySelector('.app');

const scannerGet = () => {
  const markup = `
    <main>
      <div id="reader"></div>
    </main>
  `;
  app.innerHTML = markup;

  const html5QrCode = new Html5Qrcode('reader');
  const config = {
    fps: 10,
    qrbox: 200,
  };

  html5QrCode
    .start({ facingMode: 'environment' }, config, (decodedData) => {
      markupData(decodedData);
    })
    .catch((err) => {
      console.log(err);
    });

  html5QrCode
    .stop()
    .then((ignore) => {
      // QR Code scanning is stopped.
    })
    .catch((err) => {
      // Stop failed, handle it.
    });

  const markupData = (decodedData) => {
    routie(`results/${decodedData}`);
  };
};

export default scannerGet;
