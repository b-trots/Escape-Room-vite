const toBigLetter = (letter: string) =>
  letter.charAt(0).toUpperCase() + letter.slice(1);

const toSmallLetter = (letter: string): string =>
  letter.charAt(0).toLowerCase() + letter.slice(1);

const getFilterParameters = <T, U>(currentFilter: T, filterType: U) => {
  const capitalizedFilter = toBigLetter(currentFilter as string);
  return filterType[capitalizedFilter as keyof typeof filterType];
};


export { toBigLetter, toSmallLetter, getFilterParameters };
