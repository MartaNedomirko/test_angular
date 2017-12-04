import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
public users=[];
  constructor(private userService:UserService) { 
  	this.userService.uploadUsers();
  }

  ngOnInit() {
  	this.getUsers();
    
  	//this.usersService.getUsers().subscribe((users)=>{ this.users=users;});
  	//console.log(this.users);
  }
//getUsers(callback){
// 	this.users=this.userService.getUsers(function(){
 getUsers(){
 this.userService.getUsers().subscribe(users => {
        this.users = users;
        console.log(this.users);
});}
 deleteUser(id){
   this.userService.deleteUser(id);
 }
 updateUser(product){
   this.userService.updateUser(product);
 }
//  	});
//}
}









