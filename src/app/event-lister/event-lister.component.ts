import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Users } from '../User/user.service';
import { TasksService, type Task } from '../Tasks/tasks.service';
import { EventsComponent } from '../events/events.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventDialogComponent } from '../events/create-event-dialog/create-event-dialog.component';

@Component({
  selector: 'app-event-lister',
  standalone: true,
  imports: [CommonModule,EventsComponent,MatIconModule],
  templateUrl: './event-lister.component.html',
  styleUrl: './event-lister.component.css'
})
export class EventListerComponent {
@Input() user !: Users;
tasks !: Task[];
constructor(
  private taskService : TasksService,
  private dialog : MatDialog
){
  this.tasks = this.taskService.getTasks();
  console.log(this.tasks)
}
createNewUser(){
  const dialogRef = this.dialog.open(CreateEventDialogComponent, {
    data: {userId:this.user.id},
    width: '600px',
    height: '60vh'
  });
  dialogRef.afterClosed().subscribe((task:Task) => {
    console.log(task)
    task.id = this.tasks.length+1
    if (task !== undefined) {
          this.taskService.addTasks(task);
    }
  })
}
}
