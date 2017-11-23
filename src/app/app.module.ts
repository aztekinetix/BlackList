import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from "app/auth/signin.component";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginComponent, SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
