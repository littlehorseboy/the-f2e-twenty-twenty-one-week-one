import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaiwanRailwayRoutingModule } from './taiwan-railway-routing.module';
import { TaiwanRailwayComponent } from './taiwan-railway.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    TaiwanRailwayComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    TaiwanRailwayRoutingModule
  ]
})
export class TaiwanRailwayModule { }
