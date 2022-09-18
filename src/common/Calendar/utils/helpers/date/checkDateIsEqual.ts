export const checkDateIsEqual = (date1: Date, date2: Date) => {
  const isYearsEqual = date1.getFullYear() === date2.getFullYear();
  const isMonthesEqual = date1.getMonth() === date2.getMonth();
  const isDaysEqaual = date1.getDate() === date2.getDate();

  return !!(isYearsEqual && isMonthesEqual && isDaysEqaual);
};
