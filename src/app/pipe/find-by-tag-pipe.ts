import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../recipe.type';

@Pipe({
  name: 'findByTag',
  standalone:true,
})
export class FindByTagPipe implements PipeTransform {
  transform(recipes: Recipe[], searchTag: string): Recipe[] {
    if (!searchTag){
      return recipes;
    }

    const under = searchTag.toLowerCase();
    return recipes.filter(
      (recipe) => { return recipe.tags.some(
        (tag) => tag.toLowerCase().includes(under));
    });
  }
}
