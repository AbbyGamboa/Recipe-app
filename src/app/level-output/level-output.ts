import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-level-output',
  imports: [],
  templateUrl: './level-output.html',
  styleUrl: './level-output.css',
})
export class LevelOutput {
  @Input() difficulty!:string;


}
