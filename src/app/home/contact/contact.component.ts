import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient,){

  }

  form:any;
  msg:any;

  ngOnInit(): void {

    this.form = this.fb.group({
      Name: "",
      Email: "",
      Message: ""
    });

  }



  submit(formData: any) {
    console.log(formData);

    if (
      !formData.Name || !formData.Email || !formData.Message
    ) {
      this.msg = 'Please Fill all Fields';
    } else {
      let sentData = {
        Name: formData.Name,
        Email: formData.Email,
        Message: formData.Message,
      };

      this.http
        .post<any>('https://sheetdb.io/api/v1/f2s6kdb0qun79', sentData)
        .subscribe((data) => {
          console.log(data);
          this.msg = 'Thank you for your response';
        });

      this.form.reset();
    }
  }

}
