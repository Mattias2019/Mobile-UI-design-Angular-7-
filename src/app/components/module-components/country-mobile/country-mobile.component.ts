
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
declare var $ :any;  
@Component({
  selector: 'app-country-mobile',
  templateUrl: './country-mobile.component.html',
  styleUrls: ['./country-mobile.component.scss']
})
export class CountryMobileComponent  { 
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
