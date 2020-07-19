import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { CalendarDate, LOCAL_STORAGE_DATE_FORMAT } from '../models/calendar-date.model';

const LOCAL_STORAGE_TASKS_KEY_PREFIX = 'LOCAL_STORAGE_TASKS_KEY_';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  loadTasks(date: CalendarDate): Task[] {
    return JSON.parse(localStorage.getItem(this.getLocalStorageKey(date)) || '[]');
  }

  saveTasks(date: CalendarDate, tasks: Task[]) {
    localStorage.setItem(this.getLocalStorageKey(date), JSON.stringify(tasks));
  }

  private getLocalStorageKey(date: CalendarDate) {
    return LOCAL_STORAGE_TASKS_KEY_PREFIX + date.format(LOCAL_STORAGE_DATE_FORMAT);
  }
}
