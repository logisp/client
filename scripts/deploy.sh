#!/usr/bin/env sh

set -e

yarn run build

cd ./dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:logisp/logisp.github.io.git master

cd -
