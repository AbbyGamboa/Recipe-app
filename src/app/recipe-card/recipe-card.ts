import { Component, input } from '@angular/core';
import { Recipe } from '../recipe.type';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCard {
  recipe = input.required<Recipe>();

  getRatingStars(rating:number){
    return Array(Math.floor(rating));
  }

  halfStar(rating:number){
    return rating - Math.floor(rating);
  }

}
