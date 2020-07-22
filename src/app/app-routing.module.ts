import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

//Components
import { EntrepreneurshipUpsertComponent } from './entrepreneurship-upsert/entrepreneurship-upsert.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { MyEntrepreneurshipComponent } from './my-entrepreneurship/my-entrepreneurship.component'
import { ProfileEntrepreneurshipComponent} from './profile-entrepreneurship/profile-entrepreneurship.component'


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'new-startup', component: EntrepreneurshipUpsertComponent },
  { path: 'my-startups', component: MyEntrepreneurshipComponent},
  { path: 'profile/:id', component: ProfileEntrepreneurshipComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
