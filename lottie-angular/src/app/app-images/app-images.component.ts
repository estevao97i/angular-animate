import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-images',
  templateUrl: './app-images.component.html',
  styleUrls: ['./app-images.component.scss']
})
export class AppImagesComponent implements OnInit {

  constructor(private router: Router) {}

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
  @Output() secondaryClick = new EventEmitter<void>();
  @Output() primaryClick = new EventEmitter<void>();

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
    this.animationCreated.emit(animationItem);
  }

  onSecondaryClick(clickedSecondaryEvent: any): void {
    this.secondaryClick.emit(clickedSecondaryEvent);
    this.router.navigate(['/happy-screen'])
    // console.log('eventEmitPrevious')
  }

  onPrimaryClick(clickedPrimaryEvent: any): void {
    this.router.navigate(['/step-two'])
    this.primaryClick.emit(clickedPrimaryEvent);
    // console.log('eventEmitNext')
  }

}
