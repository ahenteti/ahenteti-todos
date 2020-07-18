export interface Todo {
  title: string;
  createdAt: Date;
  done: boolean;
  progressDetails: TodoProgressDetail[];
}

export interface TodoProgressDetail {
  detail: string;
  createdAt: Date;
}

export class NullTodo implements Todo {
  title = '';
  createdAt = new Date();
  done = false;
  progressDetails = [];
}
