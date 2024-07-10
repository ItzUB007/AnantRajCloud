import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.scss']
})
export class AddBlogsComponent implements OnInit {

  constructor(private firestore: AngularFirestore) {}

  editorConfig = {
    base_url: "/tinymce",
    suffix: ".min",
    height: 300,
    license_key: 'gpl',
    menubar: false,
    toolbar:
      "undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help"
  };

  BlogText = '';
  BlogTitle = '';
  Author = '';
  ImageLink = '';
  Date = '';
  Category = '';
  Summary = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  addBlog(){

    if(this.BlogText == '' || this.BlogTitle == '' || this.Author == '' || this.ImageLink == ''){
      alert("Please fill all the fields")
    }
    else{
      console.log(this.BlogText)


      this.firestore.collection('Blogs').add({
        BlogText: this.BlogText,
        BlogTitle: this.BlogTitle,
        Author: this.Author,
        ImageLink: this.ImageLink,
        Date: this.Date,
        Category: this.Category,
        Summary: this.Summary
      })

      alert("Blog Added Successfully")
      this.BlogText = '';
      this.BlogTitle = '';
      this.Author = '';
      this.ImageLink = '';
      this.Date = '';
      this.Category = '';
      this.Summary = '';
  }}

  onEditorChange(){
    console.log(this.BlogText)
  }

}
