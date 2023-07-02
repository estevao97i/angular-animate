import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  stepTwoTitle = 'Happy Balance';
  stepTwoParagraph = ':)';

  constructor(private router: Router) { }

  ngOnInit(): void {  }

  clickNext(clickEvent: any): void {
    this.router.navigate(['/happy-screen'])
    console.log(clickEvent);
  }

  clickPrevious(clickEvent: any): void {
    this.router.navigate(['/'])
    console.log(clickEvent);
  }

}
