import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { ToastService } from './toast.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public date: Date;
  public todos: Todo[];
  public todoToAdd: string;

  constructor(private toastService: ToastService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.date = new Date();
    this.date.setHours(0, 0, 0, 0);
    this.todos = this.storageService.loadTodos(this.date);
  }

  public addTodo() {
    if (this.validateAddTodo()) {
      this.todos.unshift({ title: this.todoToAdd, createdAt: new Date(), done: false });
      this.todoToAdd = '';
      this.saveTodos();
    }
  }

  public toggleTodoStatusChange(todo: Todo) {
    todo.done = !todo.done;
    this.saveTodos();
  }

  private saveTodos() {
    this.storageService.saveTodos(this.date, this.todos);
  }

  private validateAddTodo(): boolean {
    let isValid = true;
    if (!this.todoToAdd) {
      this.toastService.error('Validation Error', 'todo title is required');
      isValid = false;
    }
    return isValid;
  }
}
