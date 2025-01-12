import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, ApiPaths } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs';
import { NutritionDetails } from '../../Interfaces/nutrition-details';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getFoodNutrition(searchItem: string): Observable<NutritionDetails[]>{
    const url = `${environment.baseURL}/${ApiPaths.GetItem}?query=${searchItem}`;
    return this.http.get<NutritionDetails[]>(url)
      .pipe(
        catchError(this.handleError<NutritionDetails[]>('getNutrition', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
