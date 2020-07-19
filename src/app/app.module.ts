import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { TaskProgressComponent } from './components/task-progress/task-progress.component';

@NgModule({
  declarations: [AppComponent, TaskStatusComponent, EditTaskDialogComponent, TaskProgressComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, CheckboxModule, ToastModule, DialogModule, TooltipModule, InputTextareaModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
