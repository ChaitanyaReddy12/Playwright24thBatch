import { test, expect } from '@playwright/test';

function reverseString(value: string): string {
  return value.split('').reverse().join('');
}

test.describe('Reverse a String in TypeScript', () => {
  test('Reverse a normal string and handle an empty string', async () => {
    // 1. Define a TypeScript function that reverses a string.
    // 2. Call the function with `Playwright`.
    // 3. Verify the result is `thgirwyalP`.
    expect(reverseString('Playwright')).toBe('thgirwyalP');

    // 1. Call the string-reversal function with an empty string.
    // 2. Verify the result is an empty string.
    expect(reverseString('')).toBe('');
  });
});
