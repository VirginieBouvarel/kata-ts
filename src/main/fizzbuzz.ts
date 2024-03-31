/*
> Ecrire un programme qui affiche, pour chaque nombre de 1 à 100 :
> ‘Fizz’ si le nombre est un multiple de 3;  
> ‘Buzz’ si le nombre est un multiple de 5; 
> ‘FizzBuzz’ si le nombre est un multiple de 3 et de 5;  
> Le nombre lui-même dans tous les autres cas.  
*/

export const fizzbuzz = (number: number): number | string => {
  if (isFizzBuzz(number)) return 'fizzbuzz';
  if (isFizz(number)) return 'fizz';
  if (isBuzz(number)) return 'buzz';
  return number;
};
const isFizz = (bar: number) => bar % 3 === 0;
const isBuzz = (bar: number) => bar % 5 === 0;
const isFizzBuzz = (number: number) => isFizz(number) && isBuzz(number);
