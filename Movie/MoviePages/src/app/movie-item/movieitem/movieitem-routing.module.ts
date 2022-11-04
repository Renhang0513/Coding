import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieItemComponent } from '../movie-item.component';

const routes: Routes = [
  {path:'movieItem',component:MovieItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieitemRoutingModule { }
