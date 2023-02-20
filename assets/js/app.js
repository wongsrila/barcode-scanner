const stopScanner = document.getElementById('stop');

const html5QrCode = new Html5Qrcode('reader');
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  prompt(decodedText);
};

const config = { fps: 10, qrbox: { width: 500, height: 500 } };

html5QrCode.start({ facingMode: 'environment' }, config, qrCodeSuccessCallback);

stopScanner.addEventListener('click', () => {
  html5QrCode
    .stop()
    .then((ignore) => {
      // QR Code scanning is stopped.
    })
    .catch((err) => {
      // Stop failed, handle it.
    });
});
