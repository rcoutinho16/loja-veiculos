import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardAdminGuard } from './auth/auth-guard-admin.guard';
import { AuthGuardUserGuard } from './auth/auth-guard-user.guard';

import { HomeComponent } from './views/home/home.component';
import { CarDetailsComponent } from './views/car-details/car-details.component';
import { CarCreateComponent } from './views/car-create/car-create.component';
import { CarEditComponent } from './views/car-edit/car-edit.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminCarsComponent } from './views/admin-cars/admin-cars.component';
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { FavoritesListComponent } from './views/favorites-list/favorites-list.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'car-create',
    component: CarCreateComponent,
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'car-details/:id',
    component: CarDetailsComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent,
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin-cars',
    component: AdminCarsComponent,
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin-users',
    component: AdminUsersComponent,
    canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'favorites-list',
    component: FavoritesListComponent,
    canActivate: [AuthGuardUserGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardUserGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
