# google-discovery-backbone

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Create a Backbone Relational API from a Google Discovery Document.

## Install
```sh
$ npm install google-discovery-backbone --save
```

## Usage
```js
var DiscoveryBackbone = require('google-discovery-backbone');
var doc = { /* google discovery document */ };
var models = DiscoveryBackbone.generate(doc);
```

## License
MIT

[sails-logo]: http://cdn.tjw.io/images/sails-logo.png
[sails-url]: https://sailsjs.org
[npm-image]: https://img.shields.io/npm/v/google-discovery-backbone.svg?style=flat
[npm-url]: https://npmjs.org/package/google-discovery-backbone
[travis-image]: https://img.shields.io/travis/tjwebb/google-discovery-backbone.svg?style=flat
[travis-url]: https://travis-ci.org/tjwebb/google-discovery-backbone
[daviddm-image]: http://img.shields.io/david/tjwebb/google-discovery-backbone.svg?style=flat
[daviddm-url]: https://david-dm.org/tjwebb/google-discovery-backbone
