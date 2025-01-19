# BoarBot Wiki

This wiki is built using [Docusaurus](https://docusaurus.io/). This decision was made as contribution is as easy as making markdown files. There is plenty of documentation on their website if you want more information on what you can do.

# Contributing

Contributing to the wiki is pretty easy. All you need is [NodeJS](https://nodejs.org/en/download).

## Setup

1. Install all needed packages by running `npm install` (This could take a few minutes)
2. Start the website by running `npm run start`
3. Access the local version of the wiki by going to http://localhost:3000

## Directories

### docs/

This directory is where the markdown files are stored. These files are automatically converted into HTML pages.

When making changes, this is the main directory you'll be working in.

### static/img/

When adding images to the website, add them to this directory. They can be used by referring to /img/<img_name> in your markdown files.

### src/css/

This directory is where all styling overrides are kept. Any changes in here should be heavily scrutinized as the styling of the wiki should stay mostly the same.

## Finalizing Changes

When you have made all your changes, you'll need to build them so the wiki can read them from a static context. Just run `npm run build` and you're good to go!