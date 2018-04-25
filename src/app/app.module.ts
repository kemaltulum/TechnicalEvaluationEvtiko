import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import {HttpClientModule} from '@angular/common/http';
import {BackendService} from './services/backend.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
