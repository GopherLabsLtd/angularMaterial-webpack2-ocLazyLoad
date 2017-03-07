# Express + AngularJS + AngularMaterial + Webpack 2 + ocLazyLoad
![angular 1.5.9](https://img.shields.io/badge/angular-1.5.9-brightgreen.svg) ![webpack 2.2.1](https://img.shields.io/badge/webpack-2.2.1-brightgreen.svg) ![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)

This is an express server setup being built using webpack, and running angular-material on the frontend.

<img src="https://raw.githubusercontent.com/preciousDev/angularMaterial-webpack-ocLazyLoad/master/preview.gif" alt="An express app running angularJS, built through webpack and lazy-loaded assets" style="max-width: 100%;" width="650">

### Current Webpack Configs
- Reads Sass & bundles into the final CSS 🎉
- Can make multiple bundles with multiple entries 😍
- Removes all console.log calls 🙏
- Removes all comments 👌
- Bundles CSS, JS, images, fonts & videos
- Excracts bundles to files instead of inline (all minified) 🔥

### Usage
**1-** Install webpack:
```shell
npm install -g webpack
```

**2-** Install the dependecies:
```shell
npm install
```

**3-** To start the webpack-dev-server:
```shell
npm run dev
```

**4-** To build and run:
```shell
npm start
```
### Contributing
If you feel that something is missing, make an issue! 🙂
If you want do add something, just make a Pull Request.

# License
MIT License

Copyright (c) 2017 preciousDev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
