import { beforeEach, test, expect } from '@jest/globals';

import { execFileSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import json from '../__fixtures__/json.expected.js';
import plain from '../__fixtures__/plain.expected.js';
import stylish from '../__fixtures__/stylish.expected.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };

const result1 = execFileSync(
  'node',
  ['bin/gendiff.js', '--format', 'json', '__fixtures__/file1.json', '__fixtures__/file2.json'],
  options,
);
const result2 = execFileSync(
  'node',
  ['bin/gendiff.js', '--format', 'stylish', '__fixtures__/file1.json', '__fixtures__/file2.json'],
  options,
);
const result3 = execFileSync(
  'node',
  ['bin/gendiff.js', '--format', 'plain', '__fixtures__/file1.json', '__fixtures__/file2.json'],
  options,
);

const node = [result1, result2, result3];

beforeEach(() => {
  // Your beforeEach logic, if any
});

test('json', () => {
  expect(node[0]).toEqual(json);
});

test('stylish', () => {
  expect(node[1]).toEqual(stylish);
});

test('plain', () => {
  expect(node[2]).toEqual(plain);
});
