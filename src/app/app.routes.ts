import { Routes } from '@angular/router';

export const routes: Routes = [
    //routes are established:
    {
        path: '', 
        pathMatch: 'full', 
        loadComponent: async () =>{
            const m = await import('./recipe-list/recipe-list');
            return m.RecipeList;
        }
    },
    {
        path: 'recipes/:id', 
        loadComponent: async ()=>{
            const m = await import('./full-recipe/full-recipe');
            return m.FullRecipe;
        }
    }, 
    {
        path: 'recipes/tag/:tag', 
        loadComponent: async ()=>{
            const m = await import('./recipe-list/recipe-list')
            return m.RecipeList;
        }
    }
    
];
