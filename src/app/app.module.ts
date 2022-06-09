import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TabCardComponent } from './tab-card/tab-card.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http'
import { PropertiesService } from './properties.service'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TabCardComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PropertiesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {


 }
