import { Component, OnInit } from '@angular/core';
// import { QuoteSamples } from './sample-quotes';
import { Quotes } from './quotes';
import {TimeAgoPipe} from 'time-ago-pipe';
import { QuoteFormComponent } from './../quotes-form/quotes-form.component';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})

export class QuotesComponent implements OnInit {

  add = true;
  voted = true;
  notVoted = false;

  currentUpVotes: number;

  constructor() { }

  quotes = [
    new Quotes('Andrew Kein', 'Narcotics Anonymous',
      'Insanity is doing the same thing, over and over again, but expecting different results.', 0, 0, new Date()),
    new Quotes('John Doe', 'George Carlin',
      'Inside every cynical person, there is a disappointed idealist.', 0, 0, new Date()),
    new Quotes('Jane Doe', 'V (Alan Moore)',
      `We are told to remember the idea, not the man, because a man can fail. 
      He can be caught, he can be killed and forgotten, but 400 years later, an idea can still change the world.`, 0, 0, new Date()),

  ];

  addQuote(quote) {
    const quoteLength = this.quotes.length;
    this.quotes.push(quote);
  }
  // deleteQuote() {
  //   this.quotes.splice();
  // }

  deleteQuote(quoteInput) {
    const index: number = this.quotes.indexOf(quoteInput);
    if (index !== -1) {
      this.quotes.splice(index, 1);
    }
  }

  upVotes(quoteInput) {
    this.voted = !this.voted;
    const index: number = this.quotes.indexOf(quoteInput);
    if (index !== -1 && this.voted) {
      this.quotes[index].upVotes++;
      $('#upvote').css('color', '#4EA699');
    } else {
      this.quotes[index].upVotes--;
      $('#upvote').css('color', '#474747');
    }
    this.currentUpVotes = this.quotes[index].upVotes;
  }

  downVotes(quoteInput) {
    this.notVoted = !this.notVoted;
    const index: number = this.quotes.indexOf(quoteInput);
      if (index !== -1 && this.notVoted) {
        this.quotes[index].downVotes--;
        $('#downvote').css('color', '#4EA699');
      } else {
        this.quotes[index].downVotes++;
        $('#downvote').css('color', '#474747');
      }
    this.currentUpVotes = this.quotes[index].upVotes;
  }

  ngOnInit() {
  }

  showForm() {
    $('.form-group').toggle();
    this.add = !this.add;
  }

  highlight(quoteInput) {
    const index: number = this.quotes.indexOf(quoteInput);
    if (this.currentUpVotes > 5) {
      $('.card').css('background-color', '#C2C1C2');
    }
  }

}
