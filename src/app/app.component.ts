import { Component, OnInit } from '@angular/core';
import { Todo, NullTodo } from './models/todo.model';
import { ToastService } from './services/toast.service';
import { StorageService } from './services/storage.service';
import { ObjectService } from './services/object.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public date: Date;
  public todos: Todo[];
  public todoToAdd: string;
  public displayTodoEditDialog = false;
  public todoToEdit: Todo = new NullTodo();
  private todoToEditIndex: number;

  constructor(private toastService: ToastService, private storageService: StorageService, private objectService: ObjectService) {}

  ngOnInit(): void {
    this.date = new Date();
    this.todos = this.loadTodos();
  }

  public addTodo() {
    if (this.validateAddTodo()) {
      this.todos.unshift({ title: this.todoToAdd, createdAt: new Date(), done: false, progressDetails: [] });
      this.todoToAdd = '';
      this.saveTodos();
    }
  }

  public toggleTaskStatus() {
    this.saveTodos();
  }

  public incrementDate(delta = 1) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + delta);
    this.todos = this.loadTodos();
  }

  public deleteTodo(event, index) {
    event.stopPropagation();
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  public editTodo(event, todo: Todo, index: number) {
    event.stopPropagation();
    this.displayTodoEditDialog = true;
    this.todoToEdit = this.objectService.clone(todo);
    this.todoToEditIndex = index;
  }

  public saveEditToto() {
    this.todos.splice(this.todoToEditIndex, 1, this.todoToEdit);
    this.saveTodos();
    this.hideTodoEditDialog();
  }

  public cancelEditToto() {
    this.hideTodoEditDialog();
  }

  public addProgressDetail(detail) {
    if (!this.todoToEdit.progressDetails) {
      this.todoToEdit.progressDetails = [];
    }
    this.todoToEdit.progressDetails.unshift({ detail, createdAt: new Date() });
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

  private loadTodos(): Todo[] {
    return this.storageService.loadTodos(this.date);
  }

  private hideTodoEditDialog() {
    this.displayTodoEditDialog = false;
  }
}
