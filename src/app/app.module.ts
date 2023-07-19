
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { HeaderComponent } from './components/template/header/header.component';
import { CarrosselBotoesComponent } from './components/template/carrossel-botoes/carrossel-botoes.component';
import { ImagesComponent } from './components/template/images/images.component';
import { ImageComponent } from './components/template/images/image/image.component';
import { LoginFormComponent } from './components/views/login-form/login-form.component';
import { HomeComponent } from './components/views/home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrosselBotoesComponent,
    ImagesComponent,
    ImageComponent,
    HomeComponent
  ],
  imports: [
    LoginFormComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
