import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companyoverview',
  templateUrl: './companyoverview.component.html',
  styleUrls: ['./companyoverview.component.scss']
})
export class CompanyoverviewComponent implements OnInit{

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

  }

}