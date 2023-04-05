import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  url: string = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space';


  constructor(private http:HttpClient) { }


  public Search(term: string) {
    console.log('searchTerm inside Search', term);
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${term}&origin=*`);
    // return this.http.get('https://en.wikipedia.org/w/api.php', {
    //   params: {
    //     action: 'query',
    //     format: 'json',
    //     list: 'search',
    //     utf8: '1',
    //     srsearch: term,
    //     origin: '*',
    //    }
    // } )
  }


}
