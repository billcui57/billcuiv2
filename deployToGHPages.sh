#! /bin/bash

npm run-script build

rsync -a ./build/* ./docs

rm -rf ./build

cp ./CNAME ./docs

git add .

git commit -a

git push

