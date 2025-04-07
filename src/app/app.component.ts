import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatButtonModule } from '@angular/material/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import { EventListerComponent } from './event-lister/event-lister.component';
import { type Users, UserService } from './User/user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,SideNavComponent,EventListerComponent,CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})  
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(
   private userService:UserService
  ){
    this.users =  this.userService.getUsers();
    this.selectedUser = this.users[0];
    console.log(this.users)
  }
  users : Users[];
  random !: number;
  selectedUser!:Users | any;
  selectUser(event:number){
    this.selectedUser = this.users.find((user: Users)=> user.id === event);
  }
  removeUser(id : number){
    this.userService.removeUser(id);
    this.users = this.userService.getUsers();
  }
}


