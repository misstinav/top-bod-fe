import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  getFoodNutrition(): any { //TODO: need to update type and add in backend url
    return fetch('api url').then(this.handleErrors);
  }

  handleErrors(response: any){
    if (!response.ok){
      throw Error(response.statusText);
    }
    return response;
  }
}
