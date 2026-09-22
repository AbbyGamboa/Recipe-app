import { Component, inject, Inject, OnInit, signal} from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { RecipeService } from '../service/recipe-service';
import { Recipe } from '../recipe.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeCard],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList implements OnInit{
  recipeService = inject(RecipeService);
  recipeList= signal<Array<Recipe>>([]);

  ngOnInit(): void {
    this.recipeService
    .getRecipesFromApi()
    .pipe(catchError(
      (error) => {
        console.log(error);
        throw error;
      }
    ))
    .subscribe((data)=>{
      this.recipeList.set(data.recipes);
    });

    console.log(this.recipeList);
  }
}
