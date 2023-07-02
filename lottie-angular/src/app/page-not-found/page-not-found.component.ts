import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  stepTwoOptions: AnimationOptions = {
    path: '../../assets/nottie/99436-404-page.json',
  };
  stepTwoTitle = 'NOT FOUND';
  stepTwoParagraph = ':(';

  clickNext(clickEvent: any): void {
    console.log(clickEvent);
  }

  clickPrevious(clickEvent: any): void {
    console.log(clickEvent);
  }

}
