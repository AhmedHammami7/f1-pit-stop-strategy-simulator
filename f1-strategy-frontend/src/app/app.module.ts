// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SimulatorComponent,
    
    // other components
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    CommonModule, HttpClientModule, FormsModule  // <---- ADD THIS HERE
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
