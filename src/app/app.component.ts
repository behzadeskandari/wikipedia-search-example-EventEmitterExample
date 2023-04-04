import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space';

  constructor(private wikipedia: WikipediaService) {

  }

  onTerm(term: string): void  {
    console.log('Iam the app', term);
    this.wikipedia.Search(term)
  }


}
