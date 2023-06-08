import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // variable to store stockDetails
  stockDetails: any;

  // variable to store country names ['India', 'United States', 'China', 'Japan', 'Australia', 'Canada']
  countryNames: any = ['India', 'United States', 'China', 'Japan', 'Australia', 'Canada'];

  // constructor to inject StockService, Router and MatSnackBar
  constructor(private stock: StockService, private router: Router, private _snackBar: MatSnackBar) { }

  // on init method to get stocks from India and store in stockDetails by calling getStocks method of StockService
  ngOnInit(): void {
    this.stock.getStocks('India').subscribe((data) => {
      this.stockDetails = data.data.slice(20, 40);
    });
  }

  // method to add stock to wishlist by calling postWishList method of StockService
  wishlist(stock: any){
    this.stock.postWishList(stock).subscribe((data: any) => {
      console.log(data);
      this._snackBar.open("Wishlisted Stock", 'Close', {
        duration: 2000,
      })
    });
  }

  // method to get stocks from selected country and store in stockDetails by calling getStocks method of StockService
  search(country: any){
    this.stock.getStocks(country).subscribe((data) => {
      console.log(data);
      this.stockDetails = data.data.slice(20, 40);
    });
  }

  // method to navigate to timed component by passing symbol as parameter
  timed(symbol: any){
    this.router.navigate([`/time-series/${symbol}`]);
  }

}
