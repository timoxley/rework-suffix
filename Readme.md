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
// pretend read and write are defined.

var important = require('rework-suffix') 
// uses !important suffix by default

var css = rework(read('input.css', 'utf8'))
  .use(important)
  .toString()

write('output.css', css)
// ...

```
#### output.css
```css
body {
  color: red !important;
}
```



