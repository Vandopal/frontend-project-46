import yaml from "js-yaml";

export default function parse(path, extname) {
const parsers = {
  json: JSON.parse,
}

const obj = parsers[extname](path);
return obj
}