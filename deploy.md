# Deployment procedure

1. Merge updates into `master`. 
2. Bump version number using `gulp bump`.
3. Add new commit with version number.
4. Tag version in GIT. 
5. Generate documentation using `gulp sassdoc`. 
6. Deploy documentation using `./deploy.sh`.
7. Publish to NPM using `npm publish`. 