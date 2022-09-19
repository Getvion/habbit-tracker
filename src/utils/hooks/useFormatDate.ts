export const useFormatDate = (locale: string, dateToFormat: Date) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'short'
  };

  const formatDate = new Intl.DateTimeFormat(locale, dateOptions).format(dateToFormat);
  return { formatDate };
};
