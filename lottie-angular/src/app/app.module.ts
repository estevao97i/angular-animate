import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHappierScreenComponent } from './app-happier-screen/app-happier-screen.component';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { StepTwoComponent } from './step-two/step-two.component';
import { AppImagesComponent } from './app-images/app-images.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    AppHappierScreenComponent,
    StepTwoComponent,
    AppImagesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // Add the module like so:
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
