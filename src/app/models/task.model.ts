import * as moment from 'moment';

export interface Task {
  title: string;
  createdAt: TaskDate;
  done: boolean;
  progressDetails: TaskProgressDetail[];
}

export interface TaskProgressDetail {
  detail: string;
  createdAt: Date;
}

export class NullTask implements Task {
  title = '';
  createdAt = new TaskDate();
  done = false;
  progressDetails = [];
}

export class TaskDate extends Date {
  constructor() {
    super();
    this.setHours(0, 0, 0, 0);
  }

  public toLocalStorageFormat(): string {
    return moment(this).format('YYYY_MM_DD');
  }

  public increase(delta: number): TaskDate {
    const res = new TaskDate();
    res.setFullYear(this.getFullYear(), this.getMonth(), this.getDate() + delta);
    return res;
  }
}
