# route-bootloader
Dynamically loads route-level middlewares into a node application

##Installation

$ npm install -g route-bootloader

## Instructions
create folders called "models" and "routes" to house all  models and api routes/controllers respectively

then include the following codes into  app.js

##Usage

```js
var express = require('express');
var app = express();
var loader = require('route-bootloader');

//some other codes.....

//to load all routes and models
loader(app);


```

## Philosophy

  The route-bootloader philosophy is to help clean-up code and reduce the chance of omitting important
   middlewares









## License

  The MIT License (MIT)

  Copyright (c) 2016 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.