import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// modules de localisation
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './comp/header-component/header-component.component';
import { BurgerComponentComponent } from './comp/burger-component/burger-component.component';
import { NavComponentComponent } from './comp/nav-component/nav-component.component';
import { CardComponentComponent } from './comp/card-component/card-component.component';
import { FooterComponentComponent } from './comp/footer-component/footer-component.component';
import { AsideComponentComponent } from './comp/aside-component/aside-component.component';
import { AsidewhiteComponentComponent } from './comp/asidewhite-component/asidewhite-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BurgerComponentComponent,
    NavComponentComponent,
    CardComponentComponent,
    FooterComponentComponent,
    AsideComponentComponent,
    AsidewhiteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
