export const isPasswordValid = (password: string): string => {
  const isPasswordLengthValid = password.length > 6;
  const isCapitalLetterContains = password.match(/[A-Z]/g);

  if (!isPasswordLengthValid && isCapitalLetterContains) {
    return 'Пароль должен быть больше 6 символов';
  }

  if (!isPasswordLengthValid && !isCapitalLetterContains) {
    return 'Пароль должен быть больше 6 символов и содержать заглавные буквы';
  }

  if (isPasswordLengthValid && !isCapitalLetterContains) {
    return 'Пароль должен содежрать хотя бы одну заглавную букву';
  }

  return '';
};

export const isEmailValid = (email: string): string => {
  const isEmailValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return isEmailValid ? '' : 'Укажите корректный email';
};
