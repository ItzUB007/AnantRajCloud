import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  blogs:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.firestore.collection('Blogs').valueChanges({idField: 'id'}).subscribe((data)=>{
      this.blogs = data;
      console.log(this.blogs)
    })


  }
}
