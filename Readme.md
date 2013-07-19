[![Build Status](https://travis-ci.org/timoxley/rework-suffix.png?branch=master)](https://travis-ci.org/timoxley/rework-suffix)

# rework-suffix

[visionmedia/rework](https://github.com/visionmedia/rework) plugin for adding suffixes to CSS declarations,
e.g. !important.

## Example

```css
/* input.css */
body {
  color: red;
}
```

```js
/* rework.js */
...

var important = require('rework-suffix') 
// uses !important suffix by default

var css = rework(read('input.css', 'utf8'))
  .use(important)
  .toString()

write('output.css', css)
...

```

```css
/* output.css */
body {
  color: red !important;
}
```



