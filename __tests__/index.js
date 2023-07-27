import { beforeEach, test, expect } from '@jest/globals';

import { execFileSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import json from '../__fixtures__/json.expected.js';
import plain from '../__fixtures__/plain.expected.js';
import stylish from '../__fixtures__/stylish.expected.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let node1;
let node2;
let node3;
let node4;

beforeEach(() => {
  const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };

  const result1 = execFileSync(
    'node',
    ['bin/gendiff.js', '__fixtures__/file1.json', '__fixtures__/file2.json'],
    options,
  );

  const result2 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'json', '__fixtures__/file1.json', '__fixtures__/file2.json'],
    options,
  );
  const result3 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'stylish', '__fixtures__/file1.json', '__fixtures__/file2.json'],
    options,
  );
  const result4 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'plain', '__fixtures__/file1.json', '__fixtures__/file2.json'],
    options,
  );
  node1 = result1;
  node2 = result2;
  node3 = result3;
  node4 = result4;
});

test('stylish', () => {
  expect(node1).toEqual(stylish);
});

test('json', () => {
  expect(node2).toEqual(json);
});

test('stylish', () => {
  expect(node3).toEqual(stylish);
});

test('plain', () => {
  expect(node4).toEqual(plain);
});
