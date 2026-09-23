import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-recipe',
  imports: [],
  templateUrl: './full-recipe.html',
  styleUrl: './full-recipe.css',
})
export class FullRecipe {
  recipeId!:number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.recipeId=Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.recipeId);
  }
}
