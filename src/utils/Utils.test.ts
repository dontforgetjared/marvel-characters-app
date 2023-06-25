import { describe, expect, it } from 'vitest';

import range from './range';
import joinClasses from './joinClasses';

describe('range()', () => {
  it('should return an array of numbers 1 through 10', () => {
    const testRange = range(1, 10);
    expect(testRange).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe('joinClasses()', () => {
  it('should return a joined string of classes', () => {
    const joinedClasses = joinClasses('foo', 'bar');
    expect(joinedClasses).toEqual('foo bar');
  });
});
