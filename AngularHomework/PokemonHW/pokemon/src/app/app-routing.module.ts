import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectedComponent } from './selected/selected.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'selected',component:SelectedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
