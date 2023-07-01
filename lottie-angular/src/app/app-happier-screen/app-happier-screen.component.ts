import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit, Input, Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-app-happier-screen',
  templateUrl: './app-happier-screen.component.html',
  styleUrls: ['./app-happier-screen.component.scss']
})
export class AppHappierScreenComponent implements OnInit {

  constructor() {  }

  options: AnimationOptions = {
    path: '../../assets/nottie/91620-jumping-lottie-animation.json'
  };

  // @Output() animationCreated = new EventEmitter();

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
    // this.animationCreated.emit(animationItem);
}

}
