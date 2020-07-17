import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public todoToAdd: string;
  public errors: string[] = [];

  public addTodo() {
    this.validateAddTodo();
    if (this.errors.length > 0) return;
    this.todos.push({ title: this.todoToAdd });
    this.todoToAdd = '';
  }

  public removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  private validateAddTodo() {
    this.errors = [];
    if (!this.todoToAdd) {
      this.errors.push('todo title is required');
    }
  }
}
