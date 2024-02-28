# Quick start
### 1. Installing dependencies
```js
npm i
```
### 2. run dev build
```js
npm run start
```
#### Your project will be on http://localhost:3000/

# More
## This webpack5 configuration will allow you to use the following core technology stack:
1. React
1. TS
1. CSS
1. SCSS
1. SCSS modules
1. support for the following file extensions:
(png|jpe?g|gif|svg|webp|ico) and (woff2?|eot|ttf|otf)
1. and etc.

## all available commands
```js
    "start": "cross-env SERVE=true webpack serve --mode development" // run dev-server
    "build": "webpack" // simple build
    "build-prod": "webpack --mode=production" // create production build
    "local-deploy": "npx serve -s build" // local deploying (if a build was previously made)
    "deploy": "gh-pages -d build" // deploying on gh-pages (if a build was previously made)
    "clean": "rd /s /q build" // clean the build derictory
    "cb-dep": "npm run clean && npm run build-prod && npm run deploy" // clean ./build -> create production build -> deploy on gh-pages
```
