import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-happier-screen',
  templateUrl: './app-happier-screen.component.html',
  styleUrls: ['./app-happier-screen.component.scss'],
})
export class AppHappierScreenComponent {

  constructor(private router: Router) {}

  stepTwoOptions: AnimationOptions = {
    path: '../../assets/nottie/91620-jumping-lottie-animation.json',
  };
  stepTwoTitle = 'Animation 1';
  stepTwoParagraph = 'Happy couple!';

  clickNext(clickEvent: any): void {
    this.router.navigate(['/step-two'])
    console.log(clickEvent);
  }

  clickPrevious(clickEvent: any): void {
    this.router.navigate(['/'])
    console.log(clickEvent);
  }
}
