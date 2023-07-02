import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-app-images',
  templateUrl: './app-images.component.html',
  styleUrls: ['./app-images.component.scss']
})
export class AppImagesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  @Input() options: AnimationOptions = {
    path: '../../assets/nottie/147022-loading.json'
  }
  @Input() titleText = '';
  @Input() stepParagraph = '';
  @Input() secondaryButtonText = '';
  @Input() primaryButtonText = '';
  @Input() buttonAppears = true;
  @Output() animationCreated = new EventEmitter();
  @Output() secondaryClick = new EventEmitter();
  @Output() primaryClick = new EventEmitter();

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
    this.animationCreated.emit(animationItem);
  }

  onSecondaryClick(clickedSecondaryEvent: any): void {
    this.secondaryClick.emit(clickedSecondaryEvent);
    console.log('eventEmitPrevious')
  }

  onPrimaryClick(clickedPrimaryEvent: any): void {
    this.primaryClick.emit(clickedPrimaryEvent);
    console.log('eventEmitNext')
  }

}
