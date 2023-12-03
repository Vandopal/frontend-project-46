### Hexlet tests and linter status:
[![Actions Status](https://github.com/Vandopal/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Vandopal/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b4f710fcd370dcc880f3/maintainability)](https://codeclimate.com/github/Vandopal/frontend-project-46)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b4f710fcd370dcc880f3/test_coverage)](https://codeclimate.com/github/Vandopal/frontend-project-46/test_coverage)
```
Проект: "Вычислитель отличий".

Описание: Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

Пример установки зависимостей:
- npm ci
- make install

Вызов панели помощи: 
- node bin/gendiff -h
- make gendiff

Запуск проверки на отличия файлов json, yml:
- node bin/gendiff.js --format stylish __fixtures__/file1.yml __fixtures__/file2.yml
- node bin/gendiff.js --format json __fixtures__/file1.json __fixtures__/file2.json
- node bin/gendiff.js --format plain __fixtures__/file1.yml __fixtures__/file2.json
- make plain
- make json
- make stylish

Примеры запуска:
```
[![asciicast](https://asciinema.org/a/596121.svg)](https://asciinema.org/a/kDxYRUo4MzfQLPOQ5runtZ5Z1)