
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
declare var $ :any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  { 
  constructor(public router: Router) { 
  }

  ngOnInit() { 
    setTimeout(()=>{  
      $('.margion-top').addClass('active');
   }, 2000);
   $('.accept-btn').on('click', function() {
    $(this).parent().parent().remove();
    $('.margion-top').removeClass('active');
  })  
    // window.addEventListener("load", function(){
    //   window.cookieconsent.initialise({
    //     "palette": {
    //       "popup": {
    //         "background": "#1d8a8a"
    //       },
    //       "button": {
    //         "background": "#62ffaa"
    //       }
    //     }
    //   })});
    
    
  } 
  
}
