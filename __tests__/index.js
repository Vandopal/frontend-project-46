import { execFileSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import json from "../__fixtures__/json.expected.js";
import plain from "../__fixtures__/plain.expected.js";
import stylish from "../__fixtures__/stylish.expected.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let node1;
let node2;
let node3;

beforeEach(() => {
  const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };

  const result1 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'json', '__fixtures__/filepath1.json', '__fixtures__/filepath2.json'],
    options,
  );
  const result2 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'stylish', '__fixtures__/filepath1.json', '__fixtures__/filepath2.json'],
    options,
  );
  const result3 = execFileSync(
    'node',
    ['bin/gendiff.js', '--format', 'plain', '__fixtures__/filepath1.json', '__fixtures__/filepath2.json'],
    options,
  );
  node1 = result1;
  node2 = result2;
  node3 = result3;
});

test('json', () => {
  expect(node1).toEqual(json);
});

test('stylish', () => {
  expect(node2).toEqual(stylish);
});

test('plain', () => {
  expect(node3).toEqual(plain);
});