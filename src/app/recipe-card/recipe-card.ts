import { Component, input, output, signal } from '@angular/core';
import { Recipe } from '../recipe.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCard {
  recipe = input.required<Recipe>();

  constructor(private router: Router){}

  getRatingStars(rating:number){
    return Array(Math.floor(rating));
  }

  halfStar(rating:number){
    return rating - Math.floor(rating);
  }

  routRecipe(recipe: Recipe){
    this.router.navigate(['/recipes/', recipe.id])
  }
}
