import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHappierScreenComponent } from './app-happier-screen/app-happier-screen.component';
import { AppImagesComponent } from './app-images/app-images.component';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
  { path: 'happy-screen', component: AppHappierScreenComponent},
  { path: 'step-two', component: StepTwoComponent},
  { path: '', component: AppImagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
