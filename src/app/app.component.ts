import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public todoToAdd: string;

  constructor(private toastService: ToastService) {}

  public addTodo() {
    if (this.validateAddTodo()) {
      this.todos.push({ title: this.todoToAdd });
      this.todoToAdd = '';
    }
  }

  public removeTodo(index: number) {
    this.todos.splice(index, 1);
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
