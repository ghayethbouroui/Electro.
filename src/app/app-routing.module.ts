import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  // Define routes for the landing / home page, create a separate component for the layout of home page
  // put only header, footer and router-outlet there

      {
        path: '', component: HomeComponent
      },
      
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
      {
        path:'**' , component:NotFoundComponent
      },
      { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] }
    ]
  
  

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
