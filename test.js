import { equal } from 'assert';
import tweetLinks from './index';

it('should tweetLinks', () =>
  equal(tweetLinks('unicorns'), 'unicorns'));

it('should tweetLinks invalid input', () =>
  equal(tweetLinks(), undefined));
