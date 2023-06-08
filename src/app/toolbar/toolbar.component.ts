import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  // constructor to inject Router
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // method to navigate to home component
  returnHome(){
    this.router.navigate(['/home']);
  }

  // method to navigate to wishlist component
  wishlist(){
    this.router.navigate(['/wishlist']);
  }

}
