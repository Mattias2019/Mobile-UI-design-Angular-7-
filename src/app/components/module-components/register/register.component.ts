
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class registerComponent  { 
  myRecaptcha = new FormControl(false);
  constructor(public router: Router) {
     
  }

  ngOnInit() {  
} 
onScriptLoad() {
  console.log('Google reCAPTCHA loaded and is ready for use!')
}

onScriptError() {
  console.log('Something went long when loading the Google reCAPTCHA')
}
}
