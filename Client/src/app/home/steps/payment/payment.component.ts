import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../user/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() product:object;
  
  @Output() paymentSaved=new EventEmitter();
  @Output() allSaved=new EventEmitter();
  public payment={
    email:'',
    number:'',
    month:'',
    year:'',
    cvc:'',
    price:''
    };
  
  constructor(private router:Router,private userService:UserService) {}
  
    ngOnInit() {}
    
    savepayment() {
    this.paymentSaved.emit(this.product);
  }
  finish()
  {
    this.allSaved.emit(this.product);
  }
  update(){
     this.userService.updateUser(this.product);
    }
    pay(product){
    this.payment["email"]=this.product["email"];
    this.payment["number"]=this.product["cardnumber"];
    this.payment["year"]=this.product["year"];
    this.payment["month"]=this.product["month"];
    this.payment["cvc"]=this.product["cvc"];
    this.payment["price"]=this.product["price"];
    console.log(this.payment);
    this.userService.pay(this.payment);
    }
  }
