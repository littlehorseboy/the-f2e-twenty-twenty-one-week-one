import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaiwanRailwayRoutingModule } from './taiwan-railway-routing.module';
import { TaiwanRailwayComponent } from './taiwan-railway.component';


@NgModule({
  declarations: [
    TaiwanRailwayComponent
  ],
  imports: [
    CommonModule,
    TaiwanRailwayRoutingModule
  ]
})
export class TaiwanRailwayModule { }
