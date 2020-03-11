# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Local Development


### Installation

```bash
yarn && yarn start
```

This command will install all node packages and it will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The deployment configuration can be found in the [docusaurus.config.js](./website/docusaurus.config.js) file. You can change the variables there to deploy the website from a different repository.

### Manual Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

This command is a convenient way to build the website and push to the `gh-pages` branch, publishing your website to the GitHub pages. Make sure that you have it configured for your repository

### Automatic Deployment (CI)

This repository is configurated to use [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) (you can use it for free) to create a CI (Continuous Integration). It means that any change made in this repo and merged into master will trigger a build/deploy task using Azure Pipelines. This means that the website will be automatically updated after each change.

