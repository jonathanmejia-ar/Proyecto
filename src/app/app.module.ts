import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const config = {
  apiKey: "AIzaSyAQ-bGtbWOxkOKUwZlIi2xB3Lest5Eg-HQ",
  authDomain: "undertake-ac85f.firebaseapp.com",
  databaseURL: "https://undertake-ac85f.firebaseio.com",
  projectId: "undertake-ac85f",
  storageBucket: "undertake-ac85f.appspot.com",
  messagingSenderId: "717927926386",
  appId: "1:717927926386:web:dea16d8e732bbe41d310eb",
  measurementId: "G-LW9KBSG7K9"
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
