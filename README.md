# Cypress Setup and Configuration Guide

This guide provides step-by-step instructions to set up Cypress for end-to-end testing, including the necessary installations, configurations, and dependencies.

## Prerequisites

Before you begin, ensure that you have the following installed on your system:

- **Node.js** (LTS version recommended)
- **npm** (Node Package Manager)
- **Yarn** (optional but recommended for package management)

## Setup Instruction
1. Install nodejs from the [official Node.js website](https://nodejs.org/).
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
---
13. When clone this repo from github, run `yarn` or `yarn install` or `npm install` to install libraries and its dependencies
14. Open cypress:
    - Run the Cypress binary directly: `./node_modules/.bin/cypress open`
    - Use npx to pull and run Cypress without installing it: `npx cypress open`
15. Run Scripts: Use the following scripts defined in package.json for running tests and development:
    - Run with hot reloading using Yarn: `yarn dev`
    - Run test scripts via command that configured in package.json: `yarn test` or `npm run test`

## Additional Information

1. [Cypress Documentation](https://docs.cypress.io/)
2. [Cypress GitHub Repository](https://github.com/cypress-io/cypress)

By following this guide, you should be able to set up Cypress, install necessary dependencies, and run the tests. Happy testing!