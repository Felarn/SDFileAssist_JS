import fs from 'fs';

const textcolor = { red: '\x1b[31m%s\x1b[0m', green: '\x1b[32m%s\x1b[0m' };
const errMsg= {
    emptyPath: new Error('>>> set path to process into cfg.json <<<'),
    writeFailed: new Error('>>> An error occured while writing JSON Object to File. <<<'),

};

export default () => {
const cfgLocation ='./cfg.json';
let cfg = {"targetPath": ""};

if (fs.existsSync(cfgLocation)){
    cfg = JSON.parse(fs.readFileSync(cfgLocation));
} else {
    fs.writeFile(cfgLocation, JSON.stringify(cfg), 'utf8', (err) => {
        if (err) {
            throw errMsg.writeFailed
        } else {
            console.log("default config tamplate was saved to cfg.json",JSON.stringify(cfg));
        }
    });
}
console.log('configs read:')
console.log('cfg:',cfg);
if (cfg.targetPath ==='') throw errMsg.emptyPath;
return cfg;
};
