import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users:Users[] = [
    { id:1, name: 'dinesh', role:'dev', img:'/assets/male.jpeg'},
    { id:2, name: 'mani', role:'dev', img:'/assets/male.jpeg'},
    { id:3, name: 'som', role:'dev', img:'/assets/female.jpeg'},
    { id:4, name: 'kaav', role:'test', img:'/assets/female.jpeg'},
    { id:5, name: 'linga', role:'dev', img:'/assets/female.jpeg'},
    { id:6, name: 'kanna', role:'dev', img:'/assets/male.jpeg'},
  ]
  profileImg : Profiles[] = [
    {gender:'Male',pic:'/assets/male.jpeg'},
    {gender:'Female',pic:'/assets/female.jpeg'},
  ]
  getprofiles(){
    return this.profileImg;
  }
  getUsers(){
    return this.users;
  }
  addUser(user: Users){
    user.id =this.users.length+1;
    this.users.push(user);
    console.log(this.users)
  }
  removeUser(userId : number){
    this.users = this.users.filter((user)=> user.id !== userId);
    console.log(this.users)
  }
  editUser(updatedUser:Users){
    console.log(this.users)
  }
}
export class Users{
  public id!: number;
  public name!:string;
  public role!:string;
  public img!:string;
}
export interface Profiles{
  gender:string;
  pic:string;
}
