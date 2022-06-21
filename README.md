# speejs

A **simple** libray for recognizing auditory commands at only 230 bytes!

Only a few lines of code:
```js
let s = new Spee();

s.ontext = function(text) {
    console.log(text)
}

s.start();
```
