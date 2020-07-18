import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { EditTodoDialogComponent } from './components/edit-todo-dialog/edit-todo-dialog.component';

@NgModule({
  declarations: [AppComponent, EditTodoDialogComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, CheckboxModule, ToastModule, DialogModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
