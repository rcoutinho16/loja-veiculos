import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//3rd party
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
