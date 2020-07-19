import * as moment from 'moment';

export const LOCAL_STORAGE_DATE_FORMAT = 'YYYY_MM_DD';

export class CalendarDate extends Date {
  constructor() {
    super();
    this.setUTCHours(0, 0, 0, 0);
  }

  public format(format: string): string {
    return moment(this).format(format);
  }

  public increase(delta: number): CalendarDate {
    const res = new CalendarDate();
    res.setFullYear(this.getFullYear(), this.getMonth(), this.getDate() + delta);
    return res;
  }

  public static from(date: Date): CalendarDate {
    const res = new CalendarDate();
    const internalDate = new Date(date); // hack to fix "Javascript: getFullyear() is not a function" error! really I didn't understand why I obtained this error when accessing the getFullYear() method directly from date variable. if you know the reason behind this, please let me know :)
    res.setFullYear(internalDate.getFullYear(), internalDate.getMonth(), internalDate.getDate());
    return res;
  }
}
