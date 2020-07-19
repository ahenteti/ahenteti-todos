import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Task } from '../models/task.model';

const LOCAL_STORAGE_TASKS_KEY_PREFIX = 'LOCAL_STORAGE_TASKS_KEY_';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  loadTasks(date: Date): Task[] {
    return JSON.parse(localStorage.getItem(this.getLocalStorageKey(date)) || '[]');
  }

  saveTasks(date: Date, tasks: Task[]) {
    localStorage.setItem(this.getLocalStorageKey(date), JSON.stringify(tasks));
  }

  private getLocalStorageKey(date: Date) {
    return LOCAL_STORAGE_TASKS_KEY_PREFIX + moment(date).format('YYYY_MM_DD');
  }
}
