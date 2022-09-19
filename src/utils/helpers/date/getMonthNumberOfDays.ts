export const getMonthNumberOfDays = (
  monthIndex: number,
  yearNumber: number = new Date().getFullYear()
) => new Date(yearNumber, monthIndex + 1, 0).getDate();
//  new date возваращет дату с последнеим числм месяца (потому что день указан как 0),
//  а getDate() вернет этот последний день
