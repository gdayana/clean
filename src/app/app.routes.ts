import { HouseFormComponent } from './houseform/houseform.component';
import { AuthGuardService } from './auth-guard.service';

import { LoginComponent } from './login/login.component';

import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCompanyComponent } from './register_company/registerc.component';
import { AdminComponent } from './admin/admin.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerc', component: RegisterCompanyComponent},
  { path: 'admin/houseform/new', component: HouseFormComponent, canActivate: [AuthGuardService]},
  { path: 'admin/houseform', component: AdminComponent, canActivate: [AuthGuardService]},
];

