import { Component } from '@angular/core';
import { NutritionDetails } from '../../Interfaces/nutrition-details';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  results: NutritionDetails[] = [];

  constructor(private searchService: SearchService) { }

  //TODO:
  // ngOnInit(): void {}

  getFoodNutrition(searchItem: string): void {
    this.searchService.getFoodNutrition(searchItem)
    .subscribe(foodItems => this.results = foodItems);
  } 
}
