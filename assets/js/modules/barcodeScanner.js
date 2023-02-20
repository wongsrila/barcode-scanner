const stopScanner = document.getElementById('stop');

const html5QrCode = new Html5Qrcode('reader');
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  decodedData(decodedText);
};

const config = { fps: 20, qrbox: { width: 300, height: 300 } };

html5QrCode.start({ facingMode: 'environment' }, config, qrCodeSuccessCallback);

stopScanner.addEventListener('click', () => {
  html5QrCode
    .stop()
    .then((ignore) => {})
    .catch((err) => {});
});

function decodedData(decodedText) {
  return decodedText;
  // console.log(decodedText);
}

export { qrCodeSuccessCallback, decodedData };
