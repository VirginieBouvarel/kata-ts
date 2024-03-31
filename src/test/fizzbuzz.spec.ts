import { fizzbuzz } from '../main/fizzbuzz';

describe('FizzBuzz', () => {
  it('should return a number', () => {
    expect(fizzbuzz(1)).toBe(1);
  });
  it('should return a number', () => {
    expect(fizzbuzz(2)).toBe(2);
  });
  it('should return fizz', () => {
    expect(fizzbuzz(3)).toBe('fizz');
  });
  it('should return fizz', () => {
    expect(fizzbuzz(6)).toBe('fizz');
  });
  it('should return buzz', () => {
    expect(fizzbuzz(5)).toBe('buzz');
  });
  it('should return buzz', () => {
    expect(fizzbuzz(25)).toBe('buzz');
  });
  it('should return fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });
  it('should return fizzbuzz', () => {
    expect(fizzbuzz(30)).toBe('fizzbuzz');
  });
});
