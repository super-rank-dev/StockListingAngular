import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  // Variable to store stockDetails
  stockDetails: any;

  // constructor to inject StockService and Router
  constructor(private service: StockService, private router:Router) { }

  // on init method to get wishlist by calling getWishlist method of StockService
  ngOnInit(): void {
    this.service.getWishlist().subscribe((data) => {
      console.log(data);
      this.stockDetails = data;
    });
  }

  // method to navigate to timed component by passing symbol as parameter
  timed(symbol: any){
    this.router.navigate([`/time-series/${symbol}`]);
  }

}
