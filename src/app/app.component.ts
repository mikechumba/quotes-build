import { Component } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteFormComponent } from './quotes-form/quotes-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quotes';
}
