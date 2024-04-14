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

  ngOnInit(): void {
    this.vendorLogos = document.querySelector('.vendorLogos');
    this.News = document.querySelector('.news');

    this.NewsnumberOfScrolls = Math.round((this.News.offsetWidth - screen.width)/300);
    this.numberOfScrolls = Math.round((this.vendorLogos.offsetWidth - screen.width)/200);

    

    console.log(this.numberOfScrolls);
    console.log(this.NewsnumberOfScrolls);

  }

  left() {

    console.log(this.timesScrolled)

    if (this.timesScrolled != 0) {
      this.LogosTranslated += 200;

      this.timesScrolled = this.timesScrolled - 1;

      this.vendorLogos.style.transform =
        'translateX(' + this.LogosTranslated + 'px)';
    }
    
  }

  right() {
    

    console.log(this.timesScrolled)
    if (this.numberOfScrolls+1 > this.timesScrolled) {
      this.LogosTranslated -= 200;
      this.vendorLogos.style.transform =
        'translateX(' + this.LogosTranslated + 'px)';

    this.timesScrolled = this.timesScrolled + 1;

    }

  }


  newsLeft() {

    console.log(this.NewstimesScrolled)

    if (this.NewstimesScrolled != 0) {
      this.NewsTranslated += 200;

      this.NewstimesScrolled = this.NewstimesScrolled - 1;

      this.News.style.transform =
        'translateX(' + this.NewsTranslated + 'px)';
    }
    
  }

  newsRight() {
    

    console.log(this.NewstimesScrolled)
    if (this.NewsnumberOfScrolls+1 > this.NewstimesScrolled) {
      this.NewsTranslated -= 200;
      this.News.style.transform =
        'translateX(' + this.NewsTranslated + 'px)';

    this.NewstimesScrolled = this.NewstimesScrolled + 1;

    }

  }





}
