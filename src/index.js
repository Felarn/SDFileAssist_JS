import fs from 'fs';
import { create } from 'lodash';
import { config } from 'process';
configPath ='./config.json';
let config = {"targetPath": ""};
if (fs.existsSync(configPath)){
    config = JSON.parse(fs.readFileSync());
} else {
    
}

console.log(config);