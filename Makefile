install:
	npm ci

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --coverage

gendiff:
	node bin/gendiff.js __fixtures__/filepath1.json __fixtures__/filepath2.json json