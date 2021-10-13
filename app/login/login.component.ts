import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  username = new FormControl('', [Validators.required]);
  
  getErrorUsername(){
    if (this.username.hasError('required')) {
      return 'You must enter user name';
    }
    return this.username.hasError('username') ? '':'';
  }
}
