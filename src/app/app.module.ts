import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import CKEditorModule  from '@ckeditor/ckeditor5-build-classic';
import { LoginComponent } from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionsService } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp({"projectId":"anantrajcloud-397e0","appId":"1:889086175361:web:4f3bee71942f1e52a48580","storageBucket":"anantrajcloud-397e0.appspot.com","apiKey":"AIzaSyAM_qZ4imPZcCIWrlKmY9PBqnIG4ieaZQc","authDomain":"anantrajcloud-397e0.firebaseapp.com","messagingSenderId":"889086175361","measurementId":"G-0VF4E3EPNP"}),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    //provideFirestore(() => getFirestore())
    //provideFirebaseApp(() => initializeApp({"projectId":"anantrajcloud-397e0","appId":"1:889086175361:web:4f3bee71942f1e52a48580","storageBucket":"anantrajcloud-397e0.appspot.com","apiKey":"AIzaSyAM_qZ4imPZcCIWrlKmY9PBqnIG4ieaZQc","authDomain":"anantrajcloud-397e0.firebaseapp.com","messagingSenderId":"889086175361","measurementId":"G-0VF4E3EPNP"})), provideFirestore(() => getFirestore())
  ],
  providers: [PermissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
