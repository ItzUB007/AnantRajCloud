import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { CompanyoverviewComponent } from './companyoverview/companyoverview.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    ServicesComponent,
    FeaturesComponent,
    CompanyoverviewComponent,
    LocationsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class HomeModule { }
