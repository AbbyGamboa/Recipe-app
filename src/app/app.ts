import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header } from './header/header';
import { RecipeCard } from './recipe-card/recipe-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RecipeCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mock-recipe');
}
