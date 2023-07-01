import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-app-happier-screen',
  templateUrl: './app-happier-screen.component.html',
  styleUrls: ['./app-happier-screen.component.css']
})
export class AppHappierScreenComponent implements OnInit {

  @Input() options: AnimationOptions = {
    path: '/assets/lottie/91620-jumping-lottie-animation.json'
  };

  ngOnInit(): void {
    onAnimate(Animation: AnimationItem): void {
      console.log(animationItem);
  }

}

}
