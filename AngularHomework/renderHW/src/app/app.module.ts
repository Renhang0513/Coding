import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderPageComponent } from './render-page/render-page.component';
import { Render2Component } from './render2/render2.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderPageComponent,
    Render2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
