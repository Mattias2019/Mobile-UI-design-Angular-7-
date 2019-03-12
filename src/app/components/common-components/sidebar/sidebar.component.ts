import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent   {

  constructor(public _router: Router ) { 
  }

  ngOnInit() {
 
  }
}
