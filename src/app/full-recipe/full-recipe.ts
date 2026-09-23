import { Component, inject, input, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.type';
import { RecipeService } from '../service/recipe-service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-full-recipe',
  imports: [],
  templateUrl: './full-recipe.html',
  styleUrl: './full-recipe.css',
})
export class FullRecipe {
  recipeService = inject(RecipeService)
  recipe = signal<any>({});
  recipeId!:number;

  constructor(private route: ActivatedRoute){}
  getRatingStars(rating:number){
    return Array(Math.floor(rating));
  }

  halfStar(rating:number){
    return rating - Math.floor(rating);
  }

  ngOnInit(){
    this.recipeId=Number(this.route.snapshot.paramMap.get('id'))
    this.recipeService.getSingleRecipe(this.recipeId).pipe(catchError(
        (error) => {
          console.log(error);
          throw error;
        }
      )).subscribe(data=>this.recipe.set(data));
  }
}
