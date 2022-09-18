import { createDate } from './createDate';

export const getMonthesNames = (locale: string = 'default') => {
  const mothesNames: {
    month: ReturnType<typeof createDate>['month'];
    monthShort: ReturnType<typeof createDate>['monthShort'];
    monthIndex: ReturnType<typeof createDate>['monthIndex'];
    date: ReturnType<typeof createDate>['date'];
  }[] = Array.from({ length: 12 });

  const d = new Date();
  mothesNames.forEach((_, i) => {
    const { month, monthIndex, monthShort, date } = createDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth() + i, d.getDate())
    });

    mothesNames[monthIndex] = { month, monthIndex, monthShort, date };
  });

  return mothesNames;
};
