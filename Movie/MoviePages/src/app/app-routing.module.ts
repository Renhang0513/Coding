import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieItemComponent } from './movie-item/movie-item.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'register',component:RegisterComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'movieItem',component:MovieItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
