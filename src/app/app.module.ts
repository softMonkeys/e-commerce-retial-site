import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';
import { BlueComponent } from './blue/blue.component';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomePageComponent, RedComponent, YellowComponent, BlueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
