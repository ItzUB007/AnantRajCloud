import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {

    this.meta.addTag({
      name: 'description',
      content:
        'Learn about the advanced features of Anant Raj Cloud data center, designed to ensure security, reliability, and scalability for your business operations.',
    });

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
