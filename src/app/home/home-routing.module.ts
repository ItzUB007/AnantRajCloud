import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { CompanyoverviewComponent } from './companyoverview/companyoverview.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

const routes: Routes = [

  { path: "", component: LandingComponent, children: [

    { path: "", component: HomeComponent  },
    { 
      path: "services", 
      component: ServicesComponent,
      title: "Data Center Services by Anant Raj Cloud"
    },
    { 
      path: "features", 
      component: FeaturesComponent,
      title: "Discover Advanced Data Center Features at Anant Raj Cloud"
    },
    { path: "company", 
      component: CompanyoverviewComponent,
      title: "About Anant Raj Cloud | Leading Data Center Company in India"
     },
    { 
      path: "locations", 
      component: LocationsComponent, 
      title: "Our Data Center Locations in India | Anant Raj Cloud"
    },
    { path: "contact", component: ContactComponent },
    //{ path: "addblog", component: AddBlogComponent },
  ] 
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
