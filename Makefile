install:
	npm ci

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --coverage

gendiff:
	node bin/gendiff.js --format stylish __fixtures__/file1.json __fixtures__/file2.json