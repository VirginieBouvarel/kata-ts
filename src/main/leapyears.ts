export const isLeap = (year: number): boolean => {
  const yearIsMultipleOf = multipleOfChecker(year);
  if (yearIsMultipleOf(400)) {
    return true;
  }
  if (yearIsMultipleOf(100)) {
    return false;
  }
  if (yearIsMultipleOf(4)) {
    return true;
  }
  return false;
};

const multipleOfChecker = (year: number) => (divider: number) => {
  return year % divider === 0;
};
