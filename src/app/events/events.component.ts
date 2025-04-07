import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Task, TasksService } from '../Tasks/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MatCardModule,CommonModule,FormsModule,MatIconModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  constructor(
    private dialog : MatDialog,
    private taskService: TasksService
  ){

  }
@Input()task!:Task;
openEditDialog(){
  const dialogRef = this.dialog.open(CreateEventDialogComponent, {
      data:this.task,
      width: '600px',
      height: '60vh'
    }
  )
  dialogRef.afterClosed().subscribe((task:Task)=>{
    console.log('Edited Successfully!')
  })
}
CheckDue(date:string){
  const today = new Date();
  const taskDate = new Date(date);
  if(taskDate > today){
    return 'red';
  }
  else if(taskDate < today){
    return 'white'
  }
  else{
   return 'blue'
  }
}
}
