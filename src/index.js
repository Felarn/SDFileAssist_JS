import fs from 'fs';

let config = JSON.parse(fs.readFileSync('./config.json'));
console.log(config);