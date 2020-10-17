const fs = require('fs');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const { performance } = require('perf_hooks');

const t0 = performance.now();

if (isMainThread) {

  const worker1 = new Worker(__filename, {
    workerData: 0,
  });
  const worker2 = new Worker(__filename, {
    workerData: 2500000,
  });
  const worker3 = new Worker(__filename, {
    workerData: 5000000,
  });
  const worker4 = new Worker(__filename, {
    workerData: 7500000,
  });

} else {

  const start = workerData;

  var stores = ['boulder', 'longmont', 'superior', 'westminister', 'aurora'];
  var products = [
  `Men's Standard Fit French Terry Hoodie Sweatshirt - Goodfellow & Co™`,
  `Men's Standard Fit Hoodie Sweatshirt - Goodfellow & Co™`,
  `Hanes Men's Ultimate Cotton Sweatshirt`,
  `Hanes Men's EcoSmart Fleece Pullover Hooded Sweatshirt`,
  `Men's Regular Fit Fleece Pullover Hoodie - Goodfellow & Co™ Black`,
  `Hanes Men's Ultimate Cotton Pullover Hooded Sweatshirt`
  ];
  // can make colors an array of arrays, each one having colors for the
  // corresponding product from the outer product loop
  var colors = [
    ['White', 'https://imgur.com/xvJ98fe.png'],
    ['Blue', 'https://imgur.com/zReIoca.png'],
    ['Green', 'https://imgur.com/SRGlFjx.png'],
    ['Peach', 'https://imgur.com/6dpqKHe.png'],
    ['Red', 'https://imgur.com/y81ZoDc.png'],
    ['Gold', 'https://imgur.com/L7cseNz.png']
  ];
  var sizes = ['S', 'M', 'L', 'XL', 'XXL', '2XL'];

  const stream = fs.createWriteStream('data.csv', { flags: 'a' });

  for (let i = start; i < start + 2500000; i++) {
    let colorIndex = Math.floor(Math.random() * 6);
    let productNameIndex = Math.floor(Math.random() * 6);
    let storeIndex = Math.floor(Math.random() * 5);
    let sizeIndex = Math.floor(Math.random() * 6);
    let quantity = Math.floor(Math.random() * 6) + 1;
    let productId = Math.floor(Math.random() * 100000) + 1;
    let storeId = Math.floor(Math.random() * 100) + 1;
    let price = (Math.random() * 100 + 25).toFixed(2);
    let rating = (Math.random() * 5).toFixed(2);
    let ratingCount = Math.floor(Math.random() * 25) + 1

    stream.write(`${colors[colorIndex][0]},${colors[colorIndex][1]},${sizes[sizeIndex]},${quantity},${productId},${storeId},${products[productNameIndex] + i},${price},${rating},${ratingCount},${stores[storeIndex] + i}\n`);
  }

  // end stream
  stream.end();

  stream.on('finish', () => {
    const t1 = performance.now();
    console.log(`TOTAL TIME: ${t1 - t0}`)
  });
}

