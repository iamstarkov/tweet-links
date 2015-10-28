# tweet-links

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> extract links from tweet

## Install

    npm install --save tweet-links

## Usage

```js
import tweetLinks from 'tweet-links';

import zero from './fixtures/zero.json';
import one  from './fixtures/one.json';
import two  from './fixtures/two.json';

tweetLinks(zero); // []
tweetLinks(one);  // [ 'https://medium.com/the-year-of-the-looking-glass/a-managers-manifesto-be5f6b118084' ]
tweetLinks(two);  // [ 'http://html5.by/blog/nwjs/', 'http://buznik.net/lifeChart/' ]
tweetLinks();     // undefined ¯\_(ツ)_/¯
```

## API

### tweetLinks(input)

#### input

*Required*  
Type: `Object`

[Tweet Object](https://dev.twitter.com/overview/api/tweets) from [Twitter API](https://dev.twitter.com/rest/public).

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/tweet-links
[npm-image]: https://img.shields.io/npm/v/tweet-links.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/tweet-links
[travis-image]: https://img.shields.io/travis/iamstarkov/tweet-links.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/tweet-links
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/tweet-links.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/tweet-links
[depstat-image]: https://david-dm.org/iamstarkov/tweet-links.svg?style=flat-square
