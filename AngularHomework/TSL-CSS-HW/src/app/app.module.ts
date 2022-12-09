import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LimitedlenghtPipe } from './pipe/limitedlenght.pipe';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LimitedlenghtPipe,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
