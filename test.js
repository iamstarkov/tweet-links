import { equal } from 'assert';
import tweetLinks from './index';

import zero from './fixtures/zero.json';
import one  from './fixtures/one.json';
import two  from './fixtures/two.json';

it('should tweetLinks handle invalid output', () =>
  equal(tweetLinks(), undefined));

it('should tweetLinks from tweet wo/ links', () =>
  equal(tweetLinks(zero), []));

it('should tweetLinks from tweet with one link', () =>
  equal(tweetLinks(one), [
    'https://medium.com/the-year-of-the-looking-glass/a-managers-manifesto-be5f6b118084'
  ]));

it('should tweetLinks from tweet with two links', () =>
  equal(tweetLinks(two), [
    'http://html5.by/blog/nwjs/',
    'http://buznik.net/lifeChart/'
  ]));
