import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Users, UserService, type Profiles } from '../User/user.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule,FormsModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
constructor(
  private userService: UserService
){
  this.profiles = this.userService.getprofiles();
}
@Input({required: true}) user !: Users;
@Input({required: true}) isNewUser!: boolean;
avatar = input<string>();
newUser: Users = new Users();
onedit:boolean = false;
profiles!: Profiles[];
allowCreate:boolean = false;
isHovered:boolean=false;
@Output() getUserId  = new EventEmitter<number>();
@Output() deleteUser = new EventEmitter<number>();
emitUserId(){
  console.info('emitting')
  this.getUserId.emit(this.user.id)
}

editUser(){
  this.onedit = false;
  this.userService.editUser(this.user);
}
createUser(){
  this.userService.addUser(this.newUser);
  this.newUser = new Users();
  this.allowCreate = false;
}
removeUser(){
  this.deleteUser.emit(this.user.id);
}
}
