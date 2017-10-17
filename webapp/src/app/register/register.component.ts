import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser: {
    username: String,
    password: String,
    email: String
  };

  constructor() { }

  ngOnInit() {
     this.registerUser = {
       username : '',
       password : '',
       email : ''
};
}

onSubmit(form: any) {

  console.log(form.controls['username'].value);
  console.log(form.controls['password'].value);
  console.log(form.controls['email'].value);
}
}
