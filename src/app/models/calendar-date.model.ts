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
}
