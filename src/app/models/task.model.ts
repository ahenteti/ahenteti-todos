import { CalendarDate } from './calendar-date.model';

export interface Task {
  title: string;
  createdAt: Date;
  date: CalendarDate;
  done: boolean;
  progressDetails: TaskProgressDetail[];
}

export interface TaskProgressDetail {
  detail: string;
  createdAt: Date;
}

export class NullTask implements Task {
  title = '';
  createdAt = new Date();
  date = new CalendarDate();
  done = false;
  progressDetails = [];
}
