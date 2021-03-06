import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Task, TaskProgress } from '../../models/task.model';

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
    this.task.progressList.unshift({ detail: progression.value, createdAt: new Date() });
    this.task.progressList = [...this.task.progressList]; // hack to make angular update the ui. If you know a more elegant technique to do that, please feel free to update the code source and let me know about it :)
    progression.value = '';
  }

  public deleteProgress(taskProgress: TaskProgress) {
    console.log(taskProgress);
    this.task.progressList = this.task.progressList.filter((progress) => progress !== taskProgress);
  }

  public titleChange(newTitle) {
    this.task.title = newTitle;
  }

  public cancel() {
    this.visible = false;
  }

  public save() {
    this.saveOutput.emit();
  }
}
