import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-companyoverview',
  templateUrl: './companyoverview.component.html',
  styleUrls: ['./companyoverview.component.scss']
})
export class CompanyoverviewComponent implements OnInit{
  constructor(private meta: Meta) {}

  ngOnInit(): void {

    this.meta.addTag({ name: 'description', 
      content: 'Get to know Anant Raj Cloud, one of the largest data center companies in India, committed to delivering exceptional data center and cloud services. Learn more about our mission and values.' });
    
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
