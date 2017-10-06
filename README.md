# totem-v3-artifacts
Totem V3 Artifacts used by totem CLI or any other tool that wants all the artifacts for configuring
totem-v3.

## Documentation

### Package Structure
The publish package comprises of:

- *templates*:  Cloudformation templates used for provisioning totem-v3 and orchestrator

## Setup
- Node v6.10+
- npm 3.x
- gulp-cli: ```npm install gulp-cli```
 
## Build
 
```
npm install
```
 
## Package
 
To create the artifacts package use command:
```
gulp package
```

## Deploy

The package gets automatically deployed by travis to NPM repository. 

- Travis runs [deploy.sh](./deploy.sh) to push changes to gemfury.
- Deploy scripts adds SNAPSHOT suffix when pushing develop branch.

## Test
N/A
 
## Release
 
 This project uses the [Git Flow](https://confluence.meltdev.com/display/DEV/Git+Flow) process for getting changes into the project.

To perform the release perform following steps:
- Create pull request from develop to master branch.
- Once travis check passes, merge develop to master.
- Create a release tag matching the version in package.json from master branch.
- Bump up the patch version in [package.json](./package.json)
