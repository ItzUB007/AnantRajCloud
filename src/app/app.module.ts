import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp({"projectId":"anantrajcloud-397e0","appId":"1:889086175361:web:4f3bee71942f1e52a48580","storageBucket":"anantrajcloud-397e0.appspot.com","apiKey":"AIzaSyAM_qZ4imPZcCIWrlKmY9PBqnIG4ieaZQc","authDomain":"anantrajcloud-397e0.firebaseapp.com","messagingSenderId":"889086175361","measurementId":"G-0VF4E3EPNP"}),
    AngularFirestoreModule,
    //provideFirebaseApp(() => initializeApp({"projectId":"anantrajcloud-397e0","appId":"1:889086175361:web:4f3bee71942f1e52a48580","storageBucket":"anantrajcloud-397e0.appspot.com","apiKey":"AIzaSyAM_qZ4imPZcCIWrlKmY9PBqnIG4ieaZQc","authDomain":"anantrajcloud-397e0.firebaseapp.com","messagingSenderId":"889086175361","measurementId":"G-0VF4E3EPNP"})), provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
