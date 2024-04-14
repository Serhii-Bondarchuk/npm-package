import { describe, expect, test } from 'vitest';
import { palindrome } from '../palindrome';

describe('palindrom()', () => {
  test('isPalindrom', () => {
    expect(palindrome('abba')).toBeTruthy();
  });

  test('isNotPalindrom', () => {
    expect(palindrome('someText')).not.toBeTruthy();
  });
})