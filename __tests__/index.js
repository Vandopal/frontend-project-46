import { beforeEach, test, expect } from '@jest/globals';

import { execFileSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import json from '../__fixtures__/json.expected.js';
import plain from '../__fixtures__/plain.expected.js';
import stylish from '../__fixtures__/stylish.expected.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let node;

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
  const result5 = execFileSync(
    'node',
    ['bin/gendiff.js', '__fixtures__/file1.yml', '__fixtures__/file2.yml'],
    options,
  );
  const result6 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'json', '__fixtures__/file1.yml', '__fixtures__/file2.yml'],
    options,
  );
  const result7 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'stylish', '__fixtures__/file1.yml', '__fixtures__/file2.yml'],
    options,
  );
  const result8 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'plain', '__fixtures__/file1.yml', '__fixtures__/file2.yml'],
    options,
  );
  node = [result1, result2, result3, result4, result5, result6, result7, result8];
});

test('stylish', () => {
  expect(node[0]).toEqual(stylish);
});

test('json', () => {
  expect(node[1]).toEqual(json);
});

test('stylish', () => {
  expect(node[2]).toEqual(stylish);
});

test('plain', () => {
  expect(node[3]).toEqual(plain);
});

test('stylish', () => {
  expect(node[4]).toEqual(stylish);
});

test('json', () => {
  expect(node[5]).toEqual(json);
});

test('stylish', () => {
  expect(node[6]).toEqual(stylish);
});

test('plain', () => {
  expect(node[7]).toEqual(plain);
});
