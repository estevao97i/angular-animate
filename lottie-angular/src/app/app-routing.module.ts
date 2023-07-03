import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHappierScreenComponent } from './app-happier-screen/app-happier-screen.component';
import { AppImagesComponent } from './app-images/app-images.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'happy-screen', component: AppHappierScreenComponent},
  { path: 'step-two', component: StepTwoComponent},
  { path: '', component: AppImagesComponent},
  { path: 'new-component',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
