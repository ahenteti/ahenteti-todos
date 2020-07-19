import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: 'edit-task-dialog.component.html',
  styleUrls: ['edit-task-dialog.component.scss'],
})
export class EditTaskDialogComponent {
  @Input() public visible: boolean;
  @Input() public task: Task;
  @Output('save') public saveOutput = new EventEmitter<void>();
  @Output('cancel') public cancelOutput = new EventEmitter<void>();

  constructor() {}

  public addProgression(progression) {
    this.task.progressDetails.push({ detail: progression, createdAt: new Date() });
  }

  public cancel() {
    this.cancelOutput.emit();
  }

  public save() {
    this.saveOutput.emit();
  }
}
