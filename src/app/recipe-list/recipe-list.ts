import { Component, inject, input, OnInit, signal} from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { RecipeService } from '../service/recipe-service';
import { Recipe } from '../recipe.type';
import { catchError } from 'rxjs';
import { FindByTagPipe } from '../pipe/find-by-tag-pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeCard, FindByTagPipe],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList implements OnInit{
  recipeService = inject(RecipeService);
  route = inject(ActivatedRoute)
  recipeList= signal<Array<Recipe>>([]);
  searchTag = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.searchTag = params.get('tag') ?? '';
      this.recipeService.getRecipesFromApi().pipe(catchError(
        (error) => {
          console.log(error);
          throw error;
        }
      )).subscribe((data)=>{
        this.recipeList.set(data.recipes);
      });
    })
    
  }
}
