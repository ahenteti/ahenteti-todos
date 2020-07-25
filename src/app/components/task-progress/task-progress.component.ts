import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { TaskProgress, TaskProgressListByDateMap } from '../../models/task.model';
import { TaskConverter } from '../../services/task.converter';

@Component({
  selector: 'app-task-progress',
  templateUrl: 'task-progress.component.html',
  styleUrls: ['task-progress.component.scss'],
})
export class TaskProgressComponent implements OnChanges {
  @Input('task-progress-list')
  public list: TaskProgress[] = [];
  @Output('delete-progress')
  private _deleteProgress = new EventEmitter<TaskProgress>();
  public map: TaskProgressListByDateMap;

  constructor(private taskConverter: TaskConverter) {}

  ngOnChanges(changes: SimpleChanges) {
    const newList: TaskProgress[] = changes['list'].currentValue;
    this.map = this.taskConverter.toMap(newList);
  }

  deleteProgress(task: TaskProgress) {
    this._deleteProgress.emit(task);
  }

  asIsOrder() {
    return 0;
  }
}
