import { Component, OnInit } from '@angular/core';
import { Task, NullTask } from './models/task.model';
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
  public tasks: Task[];
  public taskToAdd: string;
  public displayTaskEditDialog = false;
  public taskToEdit: Task = new NullTask();
  private taskToEditIndex: number;

  constructor(private toastService: ToastService, private storageService: StorageService, private objectService: ObjectService) {}

  ngOnInit(): void {
    this.date = new Date();
    this.tasks = this.loadTasks();
  }

  public addTask() {
    if (this.validateAddTask()) {
      this.tasks.unshift({ title: this.taskToAdd, createdAt: new Date(), done: false, progressDetails: [] });
      this.taskToAdd = '';
      this.saveTasks();
    }
  }

  public toggleTaskStatus() {
    this.saveTasks();
  }

  public incrementDate(delta = 1) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + delta);
    this.tasks = this.loadTasks();
  }

  public deleteTask(event, index) {
    event.stopPropagation();
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  public editTask(event, task: Task, index: number) {
    event.stopPropagation();
    this.displayTaskEditDialog = true;
    this.taskToEdit = this.objectService.clone(task);
    this.taskToEditIndex = index;
  }

  public saveEditTask() {
    this.tasks.splice(this.taskToEditIndex, 1, this.taskToEdit);
    this.saveTasks();
    this.hideTaskEditDialog();
  }

  public cancelEditTask() {
    this.hideTaskEditDialog();
  }

  public addProgressDetail(detail) {
    if (!this.taskToEdit.progressDetails) {
      this.taskToEdit.progressDetails = [];
    }
    this.taskToEdit.progressDetails.unshift({ detail, createdAt: new Date() });
  }

  private saveTasks() {
    this.storageService.saveTasks(this.date, this.tasks);
  }

  private validateAddTask(): boolean {
    let isValid = true;
    if (!this.taskToAdd) {
      this.toastService.error('Validation Error', 'task title is required');
      isValid = false;
    }
    return isValid;
  }

  private loadTasks(): Task[] {
    return this.storageService.loadTasks(this.date);
  }

  private hideTaskEditDialog() {
    this.displayTaskEditDialog = false;
  }
}
