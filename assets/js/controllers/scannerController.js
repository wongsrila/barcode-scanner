const app = document.querySelector('.app');

const scannerGet = () => {
  const markup = `
    <main>
      <div id="reader"></div>
    </main>
    <footer>
      <div class="container">
        <nav>
          <ul>
            <li><a href="./">Home</a></li>
            <li>
              <a href="#scanner">
                <img src="assets/images/barcode_icon.png" alt="" />
              </a>
            </li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
    </footer>
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

  const markupData = (decodedData) => {
    html5QrCode
      .stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
      })
      .catch((err) => {
        // Stop failed, handle it.
      });
    routie(`results/${decodedData}`);
  };
};

export default scannerGet;
