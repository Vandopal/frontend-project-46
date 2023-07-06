import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import buildDiff from './treeBuilder.js';
import parsers from './parser.js';

const absolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(filepath, "utf-8");
const extname = (filepath) => path.extname(filepath).slice(1);
const parseObject = (filepath) => parsers(readFile(filepath), extname(filepath));

function genDiff(path1, path2) {

return parseObject(path1)
}
export default genDiff; 
