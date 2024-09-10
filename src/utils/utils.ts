const capitalLetter = (letter: string) =>
  letter.charAt(0).toUpperCase() + letter.slice(1);

const getFilterParameters = <T, U>(currentFilter: T, filterType: U) => {
  const capitalizedFilter = capitalLetter(currentFilter as string);
  return filterType[capitalizedFilter as keyof typeof filterType];
};

export { capitalLetter, getFilterParameters };
