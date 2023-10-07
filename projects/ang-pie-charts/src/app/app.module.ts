import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChart1Component } from './components/piechart1/piechart1.component';
import { PieChart2Component } from './components/piechart2/piechart2.component';
import { LegendComponent } from './components/legend/legend.component';
import { LegendVComponent } from './components/legend-v/legend-v.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChart1Component,
    PieChart2Component,
    LegendComponent,
    LegendVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
