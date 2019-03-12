import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
declare var $ : any;
declare var jQuery : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent   {
 
  constructor(public router: Router ) {  
  }

  ngOnInit() {
    $('.toggle-menu-btn').click(function(){
      $('.sidebar-wrapper').addClass('show');
      $('.sidebar-overlay').addClass('active');
    });
    $('.close-sidebar-btn, .sidebar-overlay').click(function(){
      $('.sidebar-wrapper').removeClass('show');
      $('.sidebar-overlay').removeClass('active');
    });

    // $('ul li').click(function(){
    //     $('ul li a').removeClass("active-dash");
    //     $(this).addClass("active-dash");
    // });
  }

  
}
