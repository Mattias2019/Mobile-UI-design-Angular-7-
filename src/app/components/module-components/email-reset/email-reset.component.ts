
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
declare var $ :any;  
@Component({
  selector: 'app-email-reset',
  templateUrl: './email-reset.component.html',
  styleUrls: ['./email-reset.component.scss']
})
export class EmailResetComponent  { 
  messageSuccess:any;
  constructor(public router: Router) { 
  }

  ngOnInit() {
    $('.show-code-btn').on('click', function() {
      $(this).parent().parent().remove();
      $('.show-code-content').addClass('active');
    })
   }
 
}
