export const getWeekNumber = (date: Date) => {
  const firstDayeOfYear = new Date(date.getFullYear(), 0, 1);
  // !                                                               magic number
  const pastDaysYear = (date.getTime() - firstDayeOfYear.getTime()) / 86400000;

  return Math.ceil((pastDaysYear + firstDayeOfYear.getDay() + 1) / 7);
};
