import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DatePickerComponent} from 'ng2-date-picker';
import {HttpClient } from '@angular/common/http';
import {UserService} from '../../user/user.service';


@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  public step1saved=false;
  public step2saved=false;
  public step3saved=false;
  public isauction='';
  public step=1;
  public product: object={
  	image:'',
  	title: '',
	description:'',
	price:'',
	quantity:'',
	category:'',
	startdate:'',
	enddate:'',
	startprice:'',
	cardnumber:'',
	month:'',
	year:'',
	cvc:'',
	email:''
};
 
  
constructor(private http:HttpClient,private userService:UserService, private router:Router ) {
}

API_URL='http://localhost:8000/app/v1/product';
ngOnInit() {
}

gotoPage(isNext){
this.step+=(isNext)?1:-1;
}
savegeneral(product: object)
{
this.step++;
this.product = product;
this.step1saved=true;
}
savedetails(product: object)
{
this.step++;
this.product = product;
this.step2saved=true;
}
savepayment(product: object)
{
this.product = product;
this.step3saved=true;
console.log(this.product);
}
finish(product: object)
{
this.step++;
console.log(this.product);
this.userService.setUser(this.API_URL,this.product);
}
}