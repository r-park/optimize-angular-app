const Builder = require("systemjs-builder");

let destinationFolder = 'bundling-full';
let isAoT = false;
if (process.argv[2] && process.argv[2] == '--aot') {
  isAoT = true;
  destinationFolder = 'aot-systemjs';
}

// SystemJS build options.
var options = {
  normalize: true,
  runtime: false,
  sourceMaps: true,
  sourceMapContents: true,
  minify: true,
  mangle: true
};
var builder = new Builder('./dist/dev');
builder.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "n:*": "./node_modules/*",
    "rxjs/*": "node_modules/rxjs/*.js",
    "@ng-bootstrap/ng-bootstrap/*": "node_modules/@ng-bootstrap/ng-bootstrap/*.js"
  },
  map: {
    '@angular/common/src': 'n:@angular/common/src',
    '@angular/common': 'n:@angular/common/index.js',
    '@angular/compiler': 'n:@angular/compiler/index.js',
    '@angular/core/src': 'n:@angular/core/src',
    '@angular/core': 'n:@angular/core/index.js',
    '@angular/forms/src': 'n:@angular/forms/src',
    '@angular/forms': 'n:@angular/forms/index.js',
    '@angular/http/src': 'n:@angular/http/src',
    '@angular/http': 'n:@angular/http/index.js',
    '@angular/platform-browser/src': 'n:@angular/platform-browser/src',
    '@angular/platform-browser': 'n:@angular/platform-browser/index.js',
    '@angular/platform-browser-dynamic': 'n:@angular/platform-browser-dynamic/index.js',
    '@angular/platform-server': 'n:@angular/platform-server/index.js',
    '@angular/router/src': 'n:@angular/router/src',
    '@angular/router': 'n:@angular/router/index.js',
    "@ng-bootstrap/ng-bootstrap": "n:@ng-bootstrap/ng-bootstrap",
    "rxjs": "n:rxjs"
  },
  packages: {
    "app": {main: isAoT ? "main.aot.js" : "main.jit.js", defaultExtension: "js"},
  }
});

builder.bundle('app', 'dist/' + destinationFolder + '/app.min.js', options);