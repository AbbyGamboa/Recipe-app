import { Component, output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  search = output<string>();
  reset(){
    this.search.emit("");
  }

  handleSubmit(event:Event){
    event.preventDefault();
    
    const input = (event.target as HTMLFormElement).querySelector('#tag') as HTMLInputElement;

    this.search.emit(input.value);
  }
}
