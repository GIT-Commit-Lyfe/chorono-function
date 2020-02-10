const fs = require('fs');
const path = require('path');

const brand = process.argv[2];
const filterred = fs.readdirSync(path.join(__dirname)).filter(item => {
  const splitted = item.split('-');

  return /.txt/gi.test(item) && splitted[0] >= 38 && new RegExp(brand, 'gi').test(splitted[1]);
});

let data = '';

filterred.forEach(item => {
  const readPath = path.join(__dirname, item);
  const readData = fs.readFileSync(readPath, 'utf8');

  if (!data) {
    data = item.slice(0, item.indexOf('.txt')) + '\r\n\r\n' + readData;
  } else {
    data = data.split('\r\n').concat(['', item.slice(0, item.indexOf('.txt')), ''], readData.split('\r\n')).join('\r\n');
  }
})

// console.log({filterred})
// console.log(data);
data = brand.toUpperCase() + '\r\n' + data;
fs.writeFileSync(path.join(__dirname, 'TESTER.txt'), data);
console.log(brand, 'done');
// const read = fs.readFileSync(path.join(__dirname, './38-Rolex-Submariner (No Date).txt'), 'utf8')
