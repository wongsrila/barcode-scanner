fetch(`https://world.openfoodfacts.org/api/v0/product/${decodedText}.json`)
  .then((response) => response.json())
  .then((data) => dataInfo(data))
  .catch((error) => {
    console.error('There was an error!', error);
  });
