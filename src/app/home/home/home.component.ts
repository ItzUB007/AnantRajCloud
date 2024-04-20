import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  vendorLogos: any;
  LogosTranslated: any = 0;
  numberOfScrolls:any;
  timesScrolled:any = 0;

  News:any;
  NewsTranslated: any = 0;
  NewsnumberOfScrolls:any;
  NewstimesScrolled:any = 0;


  services:any;
  servicesTranslated: any = 0;
  servicesnumberOfScrolls:any;
  servicestimesScrolled:any = 0;

  ngOnInit(): void {
    this.vendorLogos = document.querySelector('.vendorLogos');
    this.News = document.querySelector('.news');
    this.services = document.querySelector('.services');

    this.NewsnumberOfScrolls = Math.round((this.News.offsetWidth - screen.width)/310);
    this.numberOfScrolls = Math.round((this.vendorLogos.offsetWidth - screen.width)/220);
    this.servicesnumberOfScrolls = Math.round((this.services.offsetWidth - screen.width)/310);
    

    console.log(this.numberOfScrolls);
    console.log(this.NewsnumberOfScrolls);
    console.log(this.servicesnumberOfScrolls);

    setInterval(()=>{

      if(this.timesScrolled <= this.numberOfScrolls){

        //for Logos
        this.right();
      }
      else{
        //For Logos
        this.timesScrolled = 0;
        this.LogosTranslated = 0;
        this.vendorLogos.style.transform =
        'translateX(' + this.LogosTranslated + 'px)';
      }


    }, 3000)

    setInterval(()=>{

      if(this.NewstimesScrolled <= this.NewsnumberOfScrolls){

        //for News
        this.newsRight();

      }
      else{

        //For News
        this.NewstimesScrolled = 0;
        this.NewsTranslated = 0;
        this.News.style.transform =
        'translateX(' + this.NewsTranslated + 'px)';

      }


    }, 3000)

    setInterval(()=>{

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


    }, 3000)

  }

  left() {

    console.log(this.timesScrolled)

    if (this.timesScrolled != 0) {
      this.LogosTranslated += 220;

      this.timesScrolled = this.timesScrolled - 1;

      this.vendorLogos.style.transform =
        'translateX(' + this.LogosTranslated + 'px)';
    }
    
  }

  right() {
    

    console.log(this.timesScrolled)
    if (this.numberOfScrolls+1 > this.timesScrolled) {
      this.LogosTranslated -= 220;
      this.vendorLogos.style.transform =
        'translateX(' + this.LogosTranslated + 'px)';

    this.timesScrolled = this.timesScrolled + 1;

    }

  }


  newsLeft() {

    console.log(this.NewstimesScrolled)

    if (this.NewstimesScrolled != 0) {
      this.NewsTranslated += 310;

      this.NewstimesScrolled = this.NewstimesScrolled - 1;

      this.News.style.transform =
        'translateX(' + this.NewsTranslated + 'px)';
    }
    
  }

  newsRight() {
    

    console.log(this.NewstimesScrolled)
    if (this.NewsnumberOfScrolls+1 > this.NewstimesScrolled) {
      this.NewsTranslated -= 310;
      this.News.style.transform =
        'translateX(' + this.NewsTranslated + 'px)';

    this.NewstimesScrolled = this.NewstimesScrolled + 1;

    }

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
