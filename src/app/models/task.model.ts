export interface Task {
  title: string;
  createdAt: Date;
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
  done = false;
  progressDetails = [];
}
