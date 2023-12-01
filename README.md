### Hexlet tests and linter status:
[![Actions Status](https://github.com/Vandopal/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Vandopal/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b4f710fcd370dcc880f3/maintainability)](https://codeclimate.com/github/Vandopal/frontend-project-46)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b4f710fcd370dcc880f3/test_coverage)](https://codeclimate.com/github/Vandopal/frontend-project-46/test_coverage)
```
Проект: "Вычислитель отличий".

Описание: Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

Пример установки зависимостей:
- npm ci
- make install

вызов панели помощи: 
gendiff -h

запуск проверки на отличия файлов json, yml:
node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json
node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yml
node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json
node bin/gendiff.js -f plain __fixtures__/file1.json __fixtures__/file2.json
node bin/gendiff.js -f stylish __fixtures__/file1.json __fixtures__/file2.json
node bin/gendiff.js -f json __fixtures__/file1.json __fixtures__/file2.json
```
