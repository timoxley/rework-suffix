[![Build Status](https://travis-ci.org/timoxley/rework-suffix.png?branch=master)](https://travis-ci.org/timoxley/rework-suffix)

# rework-suffix

[visionmedia/rework](https://github.com/visionmedia/rework) plugin for adding suffixes to CSS declarations,
e.g. !important.

## Example
#### input.css
```css
body {
  color: red;
}
```
#### rework.js
```js

var reworkSuffix = require('rework-suffix') 

var important = reworkSuffix.suffix(' !important');
// also could just do important = require('rework-suffix'), as it's the default.

var css = rework(read('input.css', 'utf8'))
  .use(important)
  .toString()

write('output.css', css)
```
#### output.css
```css
body {
  color: red !important;
}
```



