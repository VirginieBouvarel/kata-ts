import { fizzbuzz } from '../main/fizzbuzz-softwarecraft';

describe('FizzBuzz', () => {
  it('should return same number when it is not multiple of three or five', () => {
    expect(fizzbuzz(1)).toBe('1');
  });
});
