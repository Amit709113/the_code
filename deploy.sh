# place .nojekyll to bypass jekyll processing 
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

cd-