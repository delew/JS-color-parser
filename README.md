# parseColor
minimalist color CSS declaration parser

#### supported formats
* `#rrggbb`
* `#rgb`
* `rgb(r, g, b)`
* `rgba(r, g, b, a)`
* `rgb(r%, g%, b%)`
* `rgba(r%, g%, b%, a)`

#### return
return an array `[r, g, b (, a)]`

#### example
```js
var e = document.createElement('DIV');
e.style.backgroundColor = 'rgba(100%, 0%, 0%, 0.5)';

console.log( _delew.parseColor(e.style.backgroundColor) );
==> [255, 0, 0, 0.5]
```

### aditional functions
`_delew.formatRgbColor(r, g, b, a)` => return a formated CSS declaration string : **rgb[a](r, g, b[, a])**
`_delew.support.rgba()` => check if your browser support alpha channel declaration