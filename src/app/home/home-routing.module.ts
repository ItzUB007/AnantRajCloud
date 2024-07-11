import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { CompanyoverviewComponent } from './companyoverview/companyoverview.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { BlogComponent } from './blog/blog.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { authGuard } from '../services/auth.guard';
import { SitemapComponent } from './sitemap/sitemap.component';

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
    { path: "addblogs", component: AddBlogsComponent, canActivate: [authGuard] },
    { path: "blog", component: BlogComponent  },
    { path: "allblog", component: AllBlogsComponent  },
    { path: "sitemap", component: SitemapComponent  },
  ] 
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
