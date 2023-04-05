import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) {

  }

  onTerm(term: string): void  {
    console.log('Iam the app', term);
    this.wikipedia.Search(term).subscribe((response:any) => {
      console.log(response, 'response');
      this.pages = response.query.search;
    })
  }


}
