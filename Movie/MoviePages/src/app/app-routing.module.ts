import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'login', loadChildren:()=>import('./login/login/login.module')
  .then(mod=>mod.LoginModule)  
},
  {path:'register', loadChildren:()=>import('./register/register/register.module')
  .then(mod=>mod.RegisterModule)
},
  {path:'movieItem',loadChildren:()=>import('./movie-item/movieitem/movieitem.module')
  .then(mod=>mod.MovieitemModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
