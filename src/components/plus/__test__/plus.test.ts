import { describe, expect, test } from 'vitest';
import { plus } from '../plus';

describe('plus()', () => {
  test('plus', () => {
    expect(plus(-100, 200)).toBe(100);
  });
})