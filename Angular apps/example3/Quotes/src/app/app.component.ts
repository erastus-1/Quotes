import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

constructor(){
   this.quotes = ['Mahatma Gandhi','Albert Einstein','Mark Twain','Mahatma Gandhi']
}
}