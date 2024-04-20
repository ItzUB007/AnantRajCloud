import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { CompanyoverviewComponent } from './companyoverview/companyoverview.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [

  { path: "", component: LandingComponent, children: [

    { path: "", component: HomeComponent  },
    { path: "services", component: ServicesComponent },
    { path: "features", component: FeaturesComponent },
    { path: "company", component: CompanyoverviewComponent },
    { path: "locations", component: LocationsComponent },

  ] 
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
