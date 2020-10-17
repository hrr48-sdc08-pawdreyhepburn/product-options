const fs = require('fs');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const { performance } = require('perf_hooks');

const t0 = performance.now();

if (isMainThread) {

  const arr = [];
  for (let i = 0; i < 2500000; i++) {
    arr.push(`${i}\n`);
  }

  const worker1 = new Worker(__filename, {
    workerData: arr,
  });
  const worker2 = new Worker(__filename, {
    workerData: arr,
  });
  const worker3 = new Worker(__filename, {
    workerData: arr,
  });
  const worker4 = new Worker(__filename, {
    workerData: arr,
  });
} else {
  const array = workerData;

  fs.appendFile('data.csv', array, (err, result) => {
    const t1 = performance.now();
    console.log(`TOTAL TIME: ${t1 - t0}`)
  });
}

