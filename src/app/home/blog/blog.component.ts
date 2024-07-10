import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore) { }
  blog:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.activatedRoute.queryParams.subscribe((params: any) => {


      console.log(params)


      this.firestore.collection('Blogs').doc(params.id).valueChanges().subscribe((data)=>{
        console.log(data)
        this.blog = data
      })



    })
      
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }


}
