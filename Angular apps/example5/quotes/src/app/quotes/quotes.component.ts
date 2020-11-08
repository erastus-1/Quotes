import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 
              'Mahatma Gadhi', 
              'Live as if you were to die tomorrow. Learn as if you were to live forever',
              new Date (2018/8/20),
              'Erastus Ruiru.'),
    new Quotes(2,
               'Charlie Chaplin', 'Time is the best author. It always writes the perfect ending.',
               new Date (2019/3/4),
               'Wendy Karimi.'),
    new Quotes(3,
              'Albert Eistern', 'If you want to live a happy life, tie it to a goal. Not people or things.',
              new Date (2020/5/10),
              'Duncan Mutembei.'),
   ];

   addUpVote(index) {
    this.quotes[index].upvote++;
  }

  addDownVote(index) {
    this.quotes[index].downvote++;
  }

  highestUpVote() {
    let highestUpVoteQuote = new Quotes(0, '', '', new Date(), '');
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else {
      return;
    }
  }

   deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index]}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
