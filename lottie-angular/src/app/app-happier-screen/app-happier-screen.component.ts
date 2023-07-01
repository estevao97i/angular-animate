import { Input, Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-happier-screen',
  templateUrl: './app-happier-screen.component.html',
  styleUrls: ['./app-happier-screen.component.scss'],
})
export class AppHappierScreenComponent {

  constructor() {}

  stepTwoOptions: AnimationOptions = {
    path: '../../assets/nottie/91620-jumping-lottie-animation.json',
  };
  stepTwoTitle = 'Animation 1';
  stepTwoParagraph = 'Happy couple!';

  clickNext(clickEvent: any): void {
    console.log(clickEvent);
  }

  clickPrevious(clickEvent: any): void {
    console.log(clickEvent);
  }
}
