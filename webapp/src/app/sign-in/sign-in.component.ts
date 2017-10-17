import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginUser: {
    username: String,
    password: String
  };

  constructor() {}


  ngOnInit() {
    this.loginUser = {
      username : '',
      password : ''
};
}
onSubmit(form: any) {
    console.log(form.controls['username'].value);
    console.log(form.controls['password'].value);
}
  }
