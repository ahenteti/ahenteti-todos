import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { ObjectService } from '../../services/object.service';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: 'edit-todo-dialog.component.html',
  styleUrls: ['edit-todo-dialog.component.scss'],
})
export class EditTodoDialogComponent {
  @Input() public visible: boolean;
  @Input() public todo: Todo;
  @Output('save') public _save = new EventEmitter<void>();
  @Output('cancel') public _cancel = new EventEmitter<void>();

  constructor() {}

  public addProgression(progression) {
    this.todo.progressDetails.push({ detail: progression, createdAt: new Date() });
  }

  public cancel() {
    this._cancel.emit();
  }

  public save() {
    this._save.emit();
  }
}
