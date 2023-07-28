#!/usr/bin/end node
import _ from 'lodash';

const mapping = {
  root: ({ children }, iter, path) => {
    const output = children.flatMap((node) => mapping[node.type](node, iter, [...path]));
    return output.join('\n');
  },
  nested: ({ key, children }, iter, path) => {
    const output = children.flatMap((node) => mapping[node.type](node, iter, [...path, key]));
    return output.filter((val) => val !== '').join('\n');
  },
  added: (node, iter, path) => `'${[...path, node.key].join('.')}' was added with value: ${typeof node.value === 'object' ? '[complex value]' : typeof node.value === 'string' ? `'${node.value}'` : node.value}`,
  deleted: (node, iter, path) => `'${[...path, node.key].join('.')}' was removed`,
  unchanged: () => '',
  changed: (node, iter, path) => {
    const { key, value1, value2 } = node;
    return `'${[...path, key].join('.')}' was updated. From ${typeof value1 === 'object' ? '[complex value]' : typeof value1 === 'string' ? `'${value1}'` : value1} to ${typeof value2 === 'string' ? `'${value2}'` : typeof value2 === 'object' ? '[complex value]' : value2}`;
  },
};

const renderTree = (ast) => {
  const iter = (node, path) => mapping[node.type](node, iter, path);
  return iter(ast, []);
};

export default renderTree;
