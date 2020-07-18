export class Todo {
  title: string;
  createdAt: Date;
  done: boolean;
  progressDetails?: TodoProgressDetail[] = [];
}

export interface TodoProgressDetail {
  detail: string;
  createdAt: Date;
}

export class NullTodo extends Todo {
  constructor() {
    super();
    this.title = '';
    this.createdAt = new Date();
    this.done = false;
    this.progressDetails = [];
  }
}
