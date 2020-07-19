import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: 'edit-task-dialog.component.html',
  styleUrls: ['edit-task-dialog.component.scss'],
})
export class EditTaskDialogComponent {
  @Input() public task: Task;
  @Output('save') public saveOutput = new EventEmitter<void>();
  private visibleValue: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input()
  get visible() {
    return this.visibleValue;
  }

  set visible(value) {
    this.visibleValue = value;
    this.visibleChange.emit(value);
  }

  public addProgression(progression) {
    this.task.progressDetails.push({ detail: progression, createdAt: new Date() });
  }

  public cancel() {
    this.visible = false;
  }

  public save() {
    this.saveOutput.emit();
  }
}
