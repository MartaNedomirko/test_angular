import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';
import { StepsComponent } from '../steps/steps.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
public users=[];
public id="";
  constructor(private router:Router,private userService:UserService) { 
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
  sendtoform(product){
    this.id=product._id;
    console.log(this.id);
  }
 updateUser(product){
   this.userService.updateUser(product);
 }
//  	});
//}
}









