import { fizzbuzz } from '../main/fizzbuzz-softwarecraft';

describe('FizzBuzz', () => {
  it('Should return same number as a string when it is not multiple of three or five', () => {
    expect(fizzbuzz(1)).toBe('1');
  });
  it('Should return "Fizz" when number is multiple of three', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
  it('Should return "Buzz" when number is multiple of five', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });
  it('Should return "FizzBuzz" when number is multiple of three and five', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
});
