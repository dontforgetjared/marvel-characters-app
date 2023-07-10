import { describe, expect, it } from 'vitest';

import range from './range';
import joinClasses from './joinClasses';
import truncateText from './truncateText';

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

describe('truncateText()', () => {
  const mockString150Char = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus scelerisque porta lacus, at ultricies enim porta in. 
    Etiam aliquet neque in volutpat. 
  `;

  const mockString50 = 'Lorem ipsum dolor sit amet, consectetur cras amet.';

  it('should return a string with 80 characters', () => {
    const truncatedText = truncateText(mockString150Char, 80);
    expect(truncatedText.length).toEqual(80);
  });

  it('should return a string with 50 characters', () => {
    const truncatedText = truncateText(mockString50, 80);
    expect(truncatedText.length).toEqual(50);
  });
});
