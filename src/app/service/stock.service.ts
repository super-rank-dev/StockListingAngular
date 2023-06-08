import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  // constructor to inject HttpClient
  constructor(private http: HttpClient) { }

  // Method to call https://api.twelvedata.com/stocks?country=${country} by passing country name as parameter
  getStocks(country: any): Observable<any> {
    const url = `https://api.twelvedata.com/stocks?country=${country}`;
    console.log("getstock", url)
    return this.http.get(url);
  }

  // Method to call https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=0975893c35e04bc59419ad713796a678&outputsize=20 by passing symbol as parameter
  getTimeSeries(symbol: any): Observable<any> {
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=0975893c35e04bc59419ad713796a678&outputsize=20`;
    return this.http.get(url);
  }

  // Method to call http://localhost:3000/stock by passing stock as parameter
  postWishList(stock: any): any {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(stock);
    return this.http.post("http://localhost:3000/stock", body,{'headers':headers});
  }

  // Method to call http://localhost:3000/stock
  getWishlist(): Observable<any> {
    return this.http.get("http://localhost:3000/stock");
  }
}
