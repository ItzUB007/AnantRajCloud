import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', 
      content: 'Explore a wide range of data center services offered by Anant Raj Cloud, including co-location, cloud hosting, and managed IT solutions. Tailored for businesses of all sizes.' });

    window.onload = function () {
      var hash = window.location.hash.substr(1); // Get the hash fragment from the URL, excluding the #
      if (hash) {
        var section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

  }

}
