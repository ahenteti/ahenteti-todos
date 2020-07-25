import { Component, OnInit } from '@angular/core';
import { Task, NullTask } from './models/task.model';
import { ToastService } from './services/toast.service';
import { StorageService } from './services/storage.service';
import { ObjectService } from './services/object.service';
import { CalendarDate } from './models/calendar-date.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public date: CalendarDate;
  public tasks: Task[];
  public taskToAdd: string;
  public displayTaskEditDialog = false;
  public taskToEdit: Task = new NullTask();
  private taskToEditIndex: number;
  public io: string = '';

  constructor(private toastService: ToastService, private storageService: StorageService, private objectService: ObjectService) {}

  ngOnInit(): void {
    this.date = new CalendarDate();
    this.tasks = this.loadTasks();
  }

  public addTask() {
    if (this.validateAddTask()) {
      this.tasks.unshift({ title: this.taskToAdd, createdAt: new Date(), date: new CalendarDate(), done: false, progressList: [] });
      this.taskToAdd = '';
      this.saveTasks();
    }
  }

  public saveTaskStatusChange() {
    this.saveTasks();
  }

  public incrementDate(delta = 1) {
    this.date = this.date.increase(delta);
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

  public addProgressDetail(detail) {
    if (!this.taskToEdit.progressList) {
      this.taskToEdit.progressList = [];
    }
    this.taskToEdit.progressList.unshift({ detail, createdAt: new Date() });
  }

  public toggleStatus(task: Task) {
    task.done = !task.done;
    this.saveTasks();
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
