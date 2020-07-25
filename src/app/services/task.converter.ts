import { Injectable } from '@angular/core';
import { TaskProgress, TaskProgressListByDateMap } from '../models/task.model';
import { CalendarDate } from '../models/calendar-date.model';

@Injectable({ providedIn: 'root' })
export class TaskConverter {
  constructor() {}

  public toMap(progressList: TaskProgress[]): TaskProgressListByDateMap {
    const res = new TaskProgressListByDateMap();
    let progressDate: string;
    progressList.forEach((progress) => {
      progressDate = CalendarDate.from(progress.createdAt).toISOString();
      if (!res.has(progressDate)) {
        res.set(progressDate, []);
      }
      res.get(progressDate).push(progress);
    });
    return new TaskProgressListByDateMap(
      [...res].sort((a, b) => {
        return new Date(a[0]) > new Date(b[0]) ? -1 : 1;
      })
    );
  }
}
