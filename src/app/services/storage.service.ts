import { Injectable } from '@angular/core';
import { Task, TaskDate } from '../models/task.model';

const LOCAL_STORAGE_TASKS_KEY_PREFIX = 'LOCAL_STORAGE_TASKS_KEY_';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  loadTasks(date: TaskDate): Task[] {
    return JSON.parse(localStorage.getItem(this.getLocalStorageKey(date)) || '[]');
  }

  saveTasks(date: TaskDate, tasks: Task[]) {
    localStorage.setItem(this.getLocalStorageKey(date), JSON.stringify(tasks));
  }

  private getLocalStorageKey(date: TaskDate) {
    return LOCAL_STORAGE_TASKS_KEY_PREFIX + date.toLocalStorageFormat();
  }
}
