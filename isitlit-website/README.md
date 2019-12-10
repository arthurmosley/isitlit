# Isitlit Website

This directory contains the source for the Isitlit home page. It is developed using a framework called GastbyJS. This framework generates a static site that can be deployed to Github Pages or a similar static site hosting platform. In ordering to get started with developement, refer to the installation instructions below.

## Installation

A semi-modern version of NodeJS must be installed as well as NPM. This can be installed with you're local package manager or from the NodeJS website. Then, you need to run `npm install` in the root directory of this project. As a convenience, you may also want to run `npm install -g gatsby-cli` to have access to some command line tools that are useful when working with a Gatsby application.

## Development

Similar to React Native, Gatsby uses a hot-reload server during development to allow live changes while you are working. To run this hot-reload server you can run

```
gatsby develop
```

in this directory.

## Release

In order to bundle an application that can be sent to a static hosting service, the Gatsby site needs to be bundled into a completely static website. This is done easily via Gatsby's `build` command:

```
gatsby build
```

This will generate a directory in `/dist` containing all of the necessary files that can be uploaded to a static hosting provider.
