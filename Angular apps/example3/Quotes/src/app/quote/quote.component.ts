import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote(1, 
             'Mahatma Gadhi', 
             'Live as if you were to die tomorrow. Learn as if you were to live forever',
             'Erastus kariuki',
             ''),
   new Quote(2, 'Charlie Chaplin', 'Time is the best author. It always writes the perfect ending.'),
   new Quote(3, 'Albert Eistern', 'If you want to live a happy life, tie it to a goal. Not people or things.'),
   new Quote(4, 'Mahatma Gadhi', 'In a gentle way you can shake the world.')
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
