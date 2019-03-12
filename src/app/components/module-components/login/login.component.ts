
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent  { 
  constructor(public router: Router) { 
  }

  ngOnInit() { 
    // this.router.navigate(['/login'], { skipLocationChange: true });

  } 
}
