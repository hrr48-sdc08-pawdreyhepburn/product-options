const fs = require('fs');
const data = 'Here we go ya beaut!!!'

// Create a writable stream

const writerStream = fs.createWriteStream('data.csv');
const encoding = 'UTF8';

for (let i = 0; i < 50; i++) {
  writerStream.write(`${i}\n`, encoding);
}

writerStream.end();

writerStream.on('finish', () => {
  console.log('File write complete!');
});

writerStream.on('error', (err) => {
  console.log('Error in file write!');
  console.log(err);
});

console.log('Executing...')

// Write the csv column headers to the stream (is it necessary to declare utf8 encoding?)

// loop from 0 -> something big
  // create a line of the csv
  // write the line to the stream

// end the stream

// log errors and completion