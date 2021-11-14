import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MTaiwanRailwayRoutingModule } from './m-taiwan-railway-routing.module';
import { MTaiwanRailwayComponent } from './m-taiwan-railway.component';


@NgModule({
  declarations: [
    MTaiwanRailwayComponent
  ],
  imports: [
    CommonModule,
    MTaiwanRailwayRoutingModule
  ]
})
export class MTaiwanRailwayModule { }
