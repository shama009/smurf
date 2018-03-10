import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SplashComponent } from './splash.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home',     component: AppComponent },
  { path: 'splash',   component: SplashComponent }
  //{ path: '**',   redirectTo: 'splash' }
];

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
