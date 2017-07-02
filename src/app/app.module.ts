import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Ипортируем:
// Маршруты
import { RoutingModule } from './routing.module';
// Анимацию
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// модуль для работы с http протоколами
import { HttpModule } from "@angular/http";
// Формы
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Необходимые компоненты
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SingUp } from "./sing-up/sing-up.component";
import { SingIn } from "./sing-in/sing-in.component";
import { NotFoundComponent } from "./not-found/not-found.component";

// Imported hammerjs for angular/material
//import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    ContactUsComponent,
    SingUp,
    SingIn,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
