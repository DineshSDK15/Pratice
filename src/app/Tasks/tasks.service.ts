import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  tasks:Task[] = [
    {id:1,userId:1,title:'New Event',description:'This is a New Task',dueDate:'2025-5-15', isCompleted:false},
    {id:2,userId:1,title:'New Event',description:'This is a New Task',dueDate:'2025-5-16', isCompleted:false},
    {id:3,userId:3,title:'New Event',description:'This is a New Task',dueDate:'2025-5-17', isCompleted:false},
    {id:4,userId:4,title:'New Event',description:'This is a New Task',dueDate:'2025-5-17', isCompleted:false},
    {id:5,userId:5,title:'New Event',description:'This is a New Task',dueDate:'2025-5-18', isCompleted:false},
    {id:6,userId:6,title:'New Event',description:'This is a New Task',dueDate:'2025-5-19', isCompleted:false},
    ]

    getTasks(){
      return  this.tasks;
    }
    addTasks(task : Task){
      this.tasks.push(task);
    }
    
  }
export class Task{
  id!:number;
  userId!:number;
  title!:string;
  description!:string;
  dueDate!:string;
  isCompleted!:boolean;
}
