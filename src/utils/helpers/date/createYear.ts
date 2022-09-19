import { createDate } from './createDate';
import { createMonth } from './createMonth';

interface CreateYearParams {
  year?: number;
  locale?: string;
  monthNumber?: number;
}

export const createYear = (params?: CreateYearParams) => {
  const locale = params?.locale ?? 'default';

  const monthCount = 12;
  const today = createDate();

  const year = params?.year ?? today.year;
  const monthNumber = params?.monthNumber ?? today.monthNumber;

  const month = createMonth({ date: new Date(year, monthNumber - 1), locale });

  const getMonthDays = (monthIndex: number) =>
    createMonth({ date: new Date(year, monthIndex), locale }).createMonthDays();

  const createYearMothes = () => {
    const monthes = [];

    for (let i = 0; i < monthCount; i += 1) {
      monthes[i] = getMonthDays(i);
    }

    return monthes;
  };

  return { createYearMothes, month, year };
};
