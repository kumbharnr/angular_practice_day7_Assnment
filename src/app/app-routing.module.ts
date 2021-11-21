import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent,canActivate:[AuthGuardService]},
  {path:'data',component:DataComponent,canActivate:[AuthGuardService]},
  {path:'data/:id',component:DataComponent,canActivate:[AuthGuardService]},
  {path:'userLogin',component:UserLoginComponent,canActivate:[AuthGuardService]},
  {path:'Electronics',component:ElectronicsComponent,canActivate:[AuthGuardService]},
  {path:'**',component:NoPageFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
