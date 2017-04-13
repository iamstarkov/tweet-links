# tweet-links

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/tweet-links.svg)](https://greenkeeper.io/)

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

## Related

* [get-tweets][get-tweets] — get latest tweets
* [get-twitter-info][get-twitter-info] — get info about target username
* [get-twitter-followers][get-twitter-followers] — get followers for target username
* [tweets-stats][tweets-stats] — get statistics from array of tweets
* [twitter-mentions][twitter-mentions] — get latest mentions for target username
* [twitter-profile-media][twitter-profile-media] — get twitter profile image and banner
* [twitter-tokens][twitter-tokens] — get twitter tokens

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

[get-tweets]: https://github.com/iamstarkov/get-tweets
[get-twitter-info]: https://github.com/iamstarkov/get-twitter-info
[get-twitter-followers]: https://github.com/iamstarkov/get-twitter-followers
[tweets-stats]: https://github.com/iamstarkov/tweets-stats
[twitter-mentions]: https://github.com/iamstarkov/twitter-mentions
[twitter-profile-media]: https://github.com/andrepolischuk/twitter-profile-media
[twitter-tokens]: https://github.com/iamstarkov/twitter-tokens
