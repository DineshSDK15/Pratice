import { Component, Inject, inject } from '@angular/core';
import { Task } from '../../Tasks/tasks.service';
import { FormsModule } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-create-event-dialog',
  standalone: true,
  imports: [FormsModule, CommonModule,MatDividerModule],
  templateUrl: './create-event-dialog.component.html',
  styleUrl: './create-event-dialog.component.css'
})
export class CreateEventDialogComponent {
 task:Task = new Task();
 constructor(
  private dialogRef : MatDialogRef<CreateEventDialogComponent>,
  @Inject(MAT_DIALOG_DATA) private data : Task
 ){
  if(data.id && data.userId){
    this.task = data;
  }
  else if(!data.id && data.userId){
    console.log(data)
    this.task.userId = this.data.userId;
  }
 }
 closeDialog() {
  this.dialogRef.close();
}
createTask(){
  this.dialogRef.close(this.task)
}
}
