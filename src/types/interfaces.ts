export interface IHabbit {
  title: string;
  content: string;
  period: 'dayly' | 'weekly' | 'monthly';
}

export interface IStore {
  createHabbitPopup: { isOpen: boolean; habbitData: IHabbit };
  selectedHabbitPopup: { isOpen: boolean; habbitData: IHabbit };
  habbits: { habbitsList: IHabbit[] };
  theme: string;
}

export interface ICalendarDay {
  date: Date;
  dayNumber: number;
  day: string;
  dayNumberInWeek: number;
  dayShort: string;
  year: number;
  yearShort: string;
  month: string;
  monthShort: string;
  monthNumber: number;
  monthIndex: number;
  timestamp: number;
  week: number;
}

export interface ICalendarMonth {
  month: string;
  monthShort: string;
  monthIndex: number;
  date: Date;
}
