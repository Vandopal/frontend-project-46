install:
	npm ci

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --coverage

gendiff: 
	node bin/gendiff -h

stylish:
	node bin/gendiff.js --format stylish __fixtures__/file1.json __fixtures__/file2.json

json:
	node bin/gendiff.js --format json __fixtures__/file1.json __fixtures__/file2.yml

plain:
	node bin/gendiff.js --format plain __fixtures__/file1.yml __fixtures__/file2.yml