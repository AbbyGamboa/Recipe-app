import { HttpClient } from '@angular/common/http';
import { inject, Injectable, input, signal, output} from '@angular/core';
import { Recipe } from '../recipe.type';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  http = inject(HttpClient);
  getRecipesFromApi(){
    const url = `https://dummyjson.com/recipes`;
    return this.http.get<any>(url);
  }

  getSingleRecipe(id:Number){
    const url = `https://dummyjson.com/recipes/`+id;
    return this.http.get<Recipe>(url);
  }
}
