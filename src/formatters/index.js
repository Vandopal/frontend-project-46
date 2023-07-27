#!/usr/bin/end node
import formatPlain from './plain.js';
import formatStylish from './stylish.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: JSON.stringify,
};

export default (ast, type) => {
  const format = formatters[type];
  if (!format) {
    throw new Error(`Unknown format: ${type}`);
  }
  return format(ast);
};
