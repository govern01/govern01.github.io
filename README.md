# My personal website

The source code for my personal website, served with GitHub pages. Created with react using react-router, sass, react-markdown and myriad of other helpful techs.
Created using node v14.5, licensed with MIT license.

## Setup

```cmd
git clone https://github.com/govern01/govern01.github.io.git
cd govern01.git.io
npm install
```

## Running

It's as simple as:
```cmd
npm install
```
this should automatically open your default web browser with a localhost link. For example: `http://localhost:3000/`

## Developing

If you're familiar with react you should be fine; `src/templates` are the page layouts, `src/pages` are the individual pages with content, `src/data` is the data to be displayed on the pages using react-markdown.
The theme (`public/assets/css/main.css`) is simply linked to `public/index.html`. In order to change/update the css; run `npm run scss`, edit the scss files, save, and watch the css file update. Technology is truly a marvel.
If this is your first time working with sass make sure to check the docs and understand that sass acts as a preprocessor, sass files can't be linked to html they need to be "compiled" into usable css. Sass just acts as a way to create css quicker.

## Acknowledgments & Thanks

- Website theme [Hyperspace](https://html5up.net/hyperspace) by [HTML5up](https://html5up.net)
- A lot of code from this site is made with reference to [@mldangelo](https://github.com/mldangelo/)'s [personal site](https://github.com/mldangelo/personal-site)
