export const isPasswordValid = (password: string) => {
  const isPasswordLengthValid = password.length > 6;
  const isCapitalLetterContains = password.match(/[A-Z]/g);

  return !!(isPasswordLengthValid && isCapitalLetterContains);
};
