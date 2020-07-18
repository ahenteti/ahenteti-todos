import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Todo } from '../models/todo.model';

const LOCAL_STORAGE_TODOS_KEY_PREFIX = 'LOCAL_STORAGE_TODOS_KEY_';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  loadTodos(date: Date): Todo[] {
    return JSON.parse(localStorage.getItem(this.getLocalStorageKey(date)) || '[]');
  }

  saveTodos(date: Date, todos: Todo[]) {
    localStorage.setItem(this.getLocalStorageKey(date), JSON.stringify(todos));
  }

  private getLocalStorageKey(date: Date) {
    return LOCAL_STORAGE_TODOS_KEY_PREFIX + moment(date).format('YYYY_MM_DD');
  }
}
