import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { UserGuard } from './guard/user.guard';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieinfosComponent } from './movieinfos/movieinfos.component';
import { UpdateRoleComponent } from './update-role/update-role.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'homepage', component: HomepageComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register/register.module').then(
        (mod) => mod.RegisterModule
      ),
  },
  {
    path: 'movieItem',
    loadChildren: () =>
      import('./movie-item/movieitem/movieitem.module').then(
        (mod) => mod.MovieitemModule
      ),component:MovieItemComponent,canActivate:[UserGuard]
  },
  { path: 'movieinfos/:id', component: MovieinfosComponent,canActivate:[AdminGuard]},
  { path:'updateRole/:id', component:UpdateRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
