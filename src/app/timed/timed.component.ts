import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-timed',
  templateUrl: './timed.component.html',
  styleUrls: ['./timed.component.css']
})
export class TimedComponent implements OnInit {

  // variable to store timeSeriesAvailable as boolean
  timeSeriesAvailable: boolean = true;
  // variable to store timeSeriesValues as any
  timeSeriesValues: any;
  // variable to store symbol as any
  symbol: any;

  // constructor to inject ActivatedRoute and StockService
  constructor(private route: ActivatedRoute, private service:StockService) { }

  // on init to read symbol from ActivatedRoute
  // and get time series data by making call to getTimeSeries method of StockService
  ngOnInit(): void {
    this.symbol = this.route.snapshot.params['symbol'];
    this.service.getTimeSeries(this.symbol).subscribe((data) => {
      this.timeSeriesValues = data.values;
      if(data.status == 'error'){
        this.timeSeriesAvailable = false;
      }
    });
  }

}
