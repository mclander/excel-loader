# Webpack Excel loader

## Purpose
This Excel loader magically inject data from excel file to your webpack project.

## Installation

Install with npm:

```
npm install excel-loader
```

## Usage

Add the excel-loader to your webpack configuration:

``` javascript
const config = {
  module: {
    rules: [
      {
        test: /\.xls.?$/,
        loader: 'excel-loader'
      }
    ]
  }
```

The loader will translate excel files into JSON, exactly as node-xlsx do (just on build).


## Credits

* Inspired by [csv-loader](https://github.com/theplatapi/csv-loader) which inspired by [dsv-loader](https://github.com/wbkd/dsv-loader) which inspired by [json-loader](https://github.com/webpack-contrib/json-loader)
* Excel slurping done with [node-xlsx](https://github.com/mgcrea/node-xlsx) over the awesome [xlsx](https://github.com/SheetJS/js-xlsx)!

[npm-url]: https://npmjs.com/package/excel-loader