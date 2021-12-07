import { newArray } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public newArray: Array<number> = [];


  // Function 
  // Increment function that adds 1 to the input Array<number> 
  // and returns the incremented Array<number>.

  public increment(event: any) {
    this.newArray = new Array();
    let numbers: Array<number> = [];
    numbers = event?.target.value;
    let tempNumbers = numbers.toString();
    tempNumbers = tempNumbers.replace(/\[/g, '').replace(/\]/g, '').replace(/,/g, '').replace(/ /g, '');
    tempNumbers = (Number(tempNumbers) + 1).toString();
    for (let j = 0; j < tempNumbers.length; j++) {
      this.newArray.push(Number(tempNumbers[j]));
    }
  }
}

