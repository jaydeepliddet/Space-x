import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexComponent } from './spacex/spacex.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TestComponent } from './test/test.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component'


//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    SpacexComponent,
    TestComponent,
    MenuComponent,
    MainComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    NgxChartsModule,
    FormsModule,

    BrowserAnimationsModule,



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
