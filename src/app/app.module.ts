import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//3rd party
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
//shared
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
//views
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ContactComponent } from './views/contact/contact.component';
import { CarDetailsComponent } from './views/car-details/car-details.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminCarsComponent } from './views/admin-cars/admin-cars.component';
import { CarCreateComponent } from './views/car-create/car-create.component';
import { CarEditComponent } from './views/car-edit/car-edit.component';
//pipes
import { SafePipe } from './pipes/safe.pipe';
//http interceptor
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { FavoritesListComponent } from './views/favorites-list/favorites-list.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    CarDetailsComponent,
    AboutUsComponent,
    AdminComponent,
    AdminCarsComponent,
    CarCreateComponent,
    CarEditComponent,
    AdminUsersComponent,
    FavoritesListComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ToastrModule.forRoot()
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
