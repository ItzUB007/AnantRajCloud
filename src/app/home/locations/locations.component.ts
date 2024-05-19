import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  services:any;
  servicesTranslated: any = 0;
  servicesnumberOfScrolls:any;
  servicestimesScrolled:any = 0;

  
  ngOnInit(): void {


    window.onload = function () {
      var hash = window.location.hash.substr(1); // Get the hash fragment from the URL, excluding the #
      if (hash) {
        var section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    
    this.services = document.querySelector('.services');

    this.servicesnumberOfScrolls = Math.round((this.services.offsetWidth - screen.width)/310);

    console.log(this.servicesnumberOfScrolls);


    /*setInterval(()=>{

      if(this.servicestimesScrolled <= this.servicesnumberOfScrolls){

        //for Services
        this.servicesRight();

      }
      else{
        
        //For Services
        this.servicestimesScrolled = 0;
        this.servicesTranslated = 0;
        this.services.style.transform =
        'translateX(' + this.servicesTranslated + 'px)';

      }


    }, 6000)*/


  }


  servicesLeft() {

    console.log(this.servicestimesScrolled)

    if (this.servicestimesScrolled != 0) {
      this.servicesTranslated += 310;

      this.servicestimesScrolled = this.servicestimesScrolled - 1;

      this.services.style.transform =
        'translateX(' + this.servicesTranslated + 'px)';
    }
    
  }

  servicesRight() {
    

    console.log(this.servicestimesScrolled)
    if (this.servicesnumberOfScrolls+1 > this.servicestimesScrolled) {
      this.servicesTranslated -= 310;
      this.services.style.transform =
        'translateX(' + this.servicesTranslated + 'px)';

    this.servicestimesScrolled = this.servicestimesScrolled + 1;

    }

  }
}
