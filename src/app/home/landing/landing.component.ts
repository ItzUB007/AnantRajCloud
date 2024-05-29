import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  logoPath: any = '../../../assets/Logos/AnantRajCloud.png';

  videoPlayedString: any;
  videoPlayed: any;
  video: any;
  cover: any;
  body: any;


  /*disableCover(){
    console.log('Ended');
        this.cover.style.opacity = '0';
        this.cover.style.transform = "scale(" + 7 + ")"; //translateX(" + (800) + "px) 
        this.cover.style.pointerEvents = 'none';
        this.body.style.overflowY = 'scroll';

        var date = new Date().getTime() + (30*60*1000);

        console.log(date);

        var temp = {
          expiry: date,
        };

        localStorage.setItem('videoPlayed', JSON.stringify(temp));

        setInterval(() => {
          this.cover.style.display = 'none';
        }, 4000);
  }*/

  ngOnInit(): void {
    /*this.videoPlayedString = localStorage.getItem('videoPlayed');

    this.videoPlayed = JSON.parse(this.videoPlayedString);
    this.video = document.getElementById('player');
    this.cover = document.querySelector('.coverPage') as HTMLElement;
    this.body = document.getElementsByTagName('BODY')[0] as HTMLElement;

    

    console.log(this.videoPlayed?.expiry, new Date().getTime());
    console.log(typeof this.videoPlayed?.expiry, typeof new Date().getTime());

    console.log(this.videoPlayed?.expiry < new Date().getTime());

    if (
      this.videoPlayedString == null || this.videoPlayed.expiry < new Date().getTime()
    ) {
      console.log('ran');
      this.cover.style.display = 'flex';
      this.body.style.overflow = 'hidden';
    }

    console.log(this.video);

    this.video?.addEventListener(
      'ended',
      () => {
        this.disableCover();
      },
      false
    );*/
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    /*$("#search-icon").click(function() {
      $(".nav").toggleClass("search");
      $(".nav").toggleClass("no-search");
      $(".search-input").toggleClass("search-active");
    });*/

    document
      .querySelector('.menu-toggle')
      ?.addEventListener('click', (e: any) => {
        document.querySelector('.nav')?.classList.toggle('mobile-nav');
        document.querySelector('.menu-toggle')?.classList.toggle('is-active');
      });

    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 10) {
        document.querySelector('.navbar')?.classList.add('scrolling');
        this.logoPath = '../../../assets/Logos/Anant Raj Limited.png';

        document
          .querySelectorAll('.bar')
          .forEach((x: any) => (x.style.backgroundColor = '#3f3f3f'));
      } else {
        document.querySelector('.navbar')?.classList.remove('scrolling');
        this.logoPath = '../../../assets/Logos/AnantRajCloud.png';

        document
          .querySelectorAll('.bar')
          .forEach((x: any) => (x.style.backgroundColor = 'white'));
      }
    });

    /*let nav_item = document.querySelectorAll('.nav-with-sub');


    nav_item.forEach((obj:any)=>{

      obj.addEventListener('mouseover', (e:any)=>{

        e.target.childNodes[1].classList.remove("invisible");

      })

      obj.addEventListener('mouseleave', (e:any)=>{

        e.target.childNodes[1].classList.add("invisible");

      })

    })*/

    /*$('.menu-toggle').click(function(){
       $(".nav").toggleClass("mobile-nav");
       $(this).toggleClass("is-active");
    });*/
  }
}
