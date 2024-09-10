const capitalLetter = (letter: string) =>
  letter.charAt(0).toUpperCase() + letter.slice(1);

const getFilterParameters = <T, U>(filter: T, parameter: U) => {
  const capitalizedFilter = capitalLetter(filter as string);
  return parameter[capitalizedFilter as keyof typeof parameter];
};

export { capitalLetter, getFilterParameters };
