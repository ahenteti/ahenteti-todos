import { CalendarDate } from './calendar-date.model';

export interface Task {
  title: string;
  createdAt: Date;
  date: CalendarDate;
  done: boolean;
  progressList: TaskProgress[];
}

export interface TaskProgress {
  detail: string;
  createdAt: Date;
}

export class NullTask implements Task {
  title = '';
  createdAt = new Date();
  date = new CalendarDate();
  done = false;
  progressList = [];
}

export class TaskProgressListByDateMap extends Map<string, TaskProgress[]> {}
