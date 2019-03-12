
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormControl } from '@angular/forms';
declare var $ :any;  
@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class termsConditionComponent  { 
  messageSuccess:any;
  constructor(public router: Router) { 
  }

  ngOnInit() { }
 
}
