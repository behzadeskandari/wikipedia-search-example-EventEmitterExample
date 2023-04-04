import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }


  public Search(term: string) {
    return 'i Am Wikipedia search results';
  }


}
