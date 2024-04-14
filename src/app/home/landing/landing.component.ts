import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  logoPath:any = '../../../assets/Logos/AnantRajCloud.png';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    
    /*$("#search-icon").click(function() {
      $(".nav").toggleClass("search");
      $(".nav").toggleClass("no-search");
      $(".search-input").toggleClass("search-active");
    });*/
    

    document.querySelector('.menu-toggle')?.addEventListener('click', (e:any)=>{

      document.querySelector(".nav")?.classList.toggle("mobile-nav");
      document.querySelector('.menu-toggle')?.classList.toggle("is-active");
    })


    window.addEventListener('scroll', (e)=>{

      if(window.scrollY > 10){
        document.querySelector('.navbar')?.classList.add('scrolling');
        this.logoPath = '../../../assets/Logos/Anant Raj Limited.png'
      }
      else{
        document.querySelector('.navbar')?.classList.remove('scrolling');
        this.logoPath = '../../../assets/Logos/AnantRajCloud.png'

      }

    })

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
