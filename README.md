1. Install nodejs
2. Check nodejs version: `node -v`
3. Check npm version: `npm -v`
4. Check current dir path: `pwd`
5. Create source code folder: `mkdir CypressPractice`
6. Move into the created folder: `cd CypressPractice`
7. Create default package: `npm init -y`
8. Install yarn: `npm i yarn -g`
9. Check yarn version: `yarn -v`
10. Install cypress: `yarn add -D cypress`
11. Install cypress-xpath: `npm install -D cypress-xpath`
12. Update [cypress config](./cypress.config.js)
13. Add gitignore
14. Init git
15. When clone this repo from github, run `yarn` or `yarn install` or `npm install` to install libraries and its dependencies
16. Open cypress:
    - `./node_modules/.bin/cypress open`
    - `npx cypress open`: pull cypress and run but not install into the environment
    - `yarn dev`: hot reloading
    - `yarn test` or `npm run test`: scripts commands config in packages
