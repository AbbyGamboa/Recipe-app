import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Recipe } from '../recipe.type';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  http = inject(HttpClient);
  getRecipesFromApi(){
    const url = `https://dummyjson.com/recipes`;
    return this.http.get<Array<Recipe>>(url);
  }
}
