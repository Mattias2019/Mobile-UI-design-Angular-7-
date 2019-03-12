
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
declare var $ :any;  
@Component({
  selector: 'app-password-successfull',
  templateUrl: './password-successfull.component.html',
  styleUrls: ['./password-successfull.component.scss']
})
export class passwordSuccessComponent  { 
  messageSuccess:any;
  constructor(public router: Router) { 
  }

  ngOnInit() { }
 
}
