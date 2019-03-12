
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
declare var $ :any;  
@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class thankYouComponent  {  
  constructor(public router: Router) { 
  }

  ngOnInit() { }
 
}
