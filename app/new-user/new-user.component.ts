import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  
  firstname = new FormControl('', [Validators.required,Validators.maxLength(15)]);
  middlename = new FormControl('', [Validators.required,Validators.maxLength(15)]);
  lastname = new FormControl('', [Validators.required,Validators.maxLength(15)]);
  mobile = new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  parent = new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  aadharcard1 = new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{12}$")]);
  address = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorFirstName(){
    if (this.firstname.hasError('required')) {
      return 'You must enter first name';
    }
    return this.firstname.hasError('firstname') ? '':'Enter exact 15 digit';
  }
  getErrorMiddleName(){
    if (this.middlename.hasError('required')) {
      return 'You must enter middle name';
    }
    return this.middlename.hasError('middlename') ? '':'Enter exact 15 digit';
  }
  getErrorLastName(){
    if (this.lastname.hasError('required')) {
      return 'You must enter last name';
    }
    return this.lastname.hasError('lastname') ? '':'Enter exact 15 digit';
  }
  getErrorMobile(){
    if (this.mobile.hasError('required')) {
      return 'You must enter mobile number';
    }
    return this.mobile.hasError('mobile') ? '':'Enter exact 10 digit';
  }
  getErrorParentsMobile(){
    if (this.parent.hasError('required')) {
      return 'You must enter mobile number';
    }
    return this.parent.hasError('parent') ? '':'Enter exact 10 digit';
  }
  getErrorAadhar(){
    if (this.aadharcard1.hasError('required')) {
      return 'You must enter aadhar card';
    }
    return this.aadharcard1.hasError('aadharcard1') ? '':'Enter exact 12 digit';
  }
  getErrorAddress(){
    if (this.address.hasError('required')) {
      return 'You must enter address';
    }
    return this.address.hasError('address') ? '':'';
  }
  getErrorCity(){
    if (this.city.hasError('required')) {
      return 'You must enter city';
    }
    return this.city.hasError('city') ? '':'';
  }
  getErrorState(){
    if (this.state.hasError('required')) {
      return 'You must enter state';
    }
    return this.state.hasError('state') ? '':'';
  }
  getErrorCountry(){
    if (this.country.hasError('required')) {
      return 'You must enter country';
    }
    return this.country.hasError('country') ? '':'';
  }
  getErrorUsername(){
    if (this.username.hasError('required')) {
      return 'You must enter username';
    }
    return this.username.hasError('username') ? '':'';
  }
  getErrorMail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
