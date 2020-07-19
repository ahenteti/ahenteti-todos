import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-status',
  templateUrl: 'task-status.component.html',
  styleUrls: ['task-status.component.scss'],
})
export class TaskStatusComponent {
  private doneValue: boolean;
  @Output() doneChange = new EventEmitter<boolean>();

  @Input()
  get done() {
    return this.doneValue;
  }

  set done(value) {
    this.doneValue = value;
    this.doneChange.emit(value);
  }

  public toggleStatus() {
    console.log(this.done);
    this.done = !this.done;
  }
}
