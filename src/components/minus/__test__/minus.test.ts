import { expect, test } from 'vitest';
import { minus } from '../minus';

test('minus', () => {
  expect(minus()).toBe(10);
});