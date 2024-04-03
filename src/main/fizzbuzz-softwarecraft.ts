const fizzMultiplier = 3;
const buzzMultiplier = 5;
const FIZZ = 'Fizz';
const BUZZ = 'Buzz';

export const fizzbuzz = (number: number): string => {
  if (isMultipleOf(number, fizzMultiplier) && isMultipleOf(number, buzzMultiplier)) return FIZZ + BUZZ;
  if (isMultipleOf(number, fizzMultiplier)) return FIZZ;
  if (isMultipleOf(number, buzzMultiplier)) return BUZZ;
  return number.toString();
};

function isMultipleOf(number: number, divider: number) {
  return number % divider === 0;
}
