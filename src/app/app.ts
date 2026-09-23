import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header } from './header/header';
import { RecipeList } from './recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  searchTag = '';
  
  protected readonly title = signal('mock-recipe');
}
