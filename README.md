# vash-helpers
A collection of helpers for vash

# Usage
```js
require('vash-helpers');
// now helpers are loaded

// you can now have multiple src folders
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views2')]);
app.set('view engine', 'vash');
```

# Helpers

## html.script()
```vash
@html.script({ dev: 'devSrc', prod: 'prodSrc' })
```
`dev` will be loaded when `process.env.NODE_ENV === 'development'`
`prod` otherwise