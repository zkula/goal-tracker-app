import { Component, OnInit } from '@angular/core';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'goal-tracker-app';
  quote: any;

  constructor(private quoteService:QuoteService){}

  ngOnInit(){
    this.quoteService.getQuote().subscribe({
      next: quote => this.quote = quote,
      error: err => console.log(err)
    });
  }
  
}
