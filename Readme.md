# rework-important

[visionmedia/rework] plugin for adding postfixes to CSS declarations,
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

var important = require('rework-important')

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



