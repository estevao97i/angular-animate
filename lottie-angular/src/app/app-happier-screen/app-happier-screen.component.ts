import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit, Input, Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-happier-screen',
  templateUrl: './app-happier-screen.component.html',
  styleUrls: ['./app-happier-screen.component.scss']
})
export class AppHappierScreenComponent implements OnInit {

  constructor() {  }

  @Input() options: AnimationOptions = {
    path: '../../assets/nottie/91620-jumping-lottie-animation.json'
  };

  @Input() titleText = 'Step 1';
  @Input() stepParagraph = 'Lorem ipsum blah blah blah';
  @Input() secondaryButtonText = 'Previous';
  @Input() primaryButtonText = 'Next';
  @Output() animationCreated = new EventEmitter();
  @Output() secondaryClick = new EventEmitter();
  @Output() primaryClick = new EventEmitter();

  // @Output() animationCreated = new EventEmitter();

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
    // this.animationCreated.emit(animationItem);
    this.animationCreated.emit(animationItem);
  }

  onSecondaryClick(clickedSecondaryEvent: any): void {
    this.secondaryClick.emit(clickedSecondaryEvent);
  }

  onPrimaryClick(clickedPrimaryEvent: any): void {
    this.primaryClick.emit(clickedPrimaryEvent);
  }
}

