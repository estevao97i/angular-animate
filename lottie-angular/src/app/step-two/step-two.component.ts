import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  stepTwoOptions: AnimationOptions = {
    path: '../../assets/nottie/84630-swinging-happy-emoji.json'
  };
  stepTwoTitle = 'Step 2';
  stepTwoParagraph = 'This is the second step of your stuff!';

  constructor() { }
  ngOnInit(): void {  }

  clickNext(clickEvent: any): void {
    console.log(clickEvent);
  }

  clickPrevious(clickEvent: any): void {
    console.log(clickEvent);
  }

}
