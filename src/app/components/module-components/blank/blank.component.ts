
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
declare var $ :any;  
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent  { 
  messageSuccess:any;
  constructor(public router: Router) { 
  }

  ngOnInit() { }
 
}
