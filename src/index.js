import fs from 'fs';
import setConfig from "./utils/setConfig.js";
const cfg = setConfig();

const contentList=fs.readdirSync(cfg.targetPath)
console.log(contentList);
const tree = {}
const stats = [];
for (let itemName of contentList) {
    console.log(itemName);
    const itemFullPath = cfg.targetPath+'/'+itemName;
    console.log(itemFullPath);
    const isFile = fs.statSync(itemFullPath).isFile();
    tree[itemName] = {isFile}
}
console.log(tree);