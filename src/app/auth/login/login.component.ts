import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 // styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm:FormGroup;
  
 constructor() { }

  ngOnInit() {
    this.loginForm=new FormGroup({
    user:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  });
  }

  onSubmit(){
    console.log(this.loginForm);
  }

}
