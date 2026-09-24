import { Component, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  search = output<string>();
  constructor(private router: Router){}

  reset(){
    this.router.navigate(['']);
  }

  handleSubmit(event:Event){
    event.preventDefault();
    const tag = (event.target as HTMLFormElement).querySelector('#tag') as HTMLInputElement;

    this.router.navigate(['/recipes/tag/', tag.value])
  }
}
