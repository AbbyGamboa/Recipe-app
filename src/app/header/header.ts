import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logConsole(){
    console.log("Search")
  }

  handleSubmit(event:Event){
    event.preventDefault();
  

    console.log("form submitted");
  }
}
