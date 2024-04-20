import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { CompanyoverviewComponent } from './companyoverview/companyoverview.component';
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    ServicesComponent,
    FeaturesComponent,
    CompanyoverviewComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
