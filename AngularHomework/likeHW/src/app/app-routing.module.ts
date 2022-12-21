import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';

const routes: Routes = [
  { path: 'header', component: Page4Component },
  { path: 'aboutZone', component: Page5Component },
  { path: 'page6', component: Page6Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
