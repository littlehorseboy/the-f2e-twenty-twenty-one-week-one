import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MTaiwanRailwayComponent } from './m-taiwan-railway.component';

const routes: Routes = [{ path: '', component: MTaiwanRailwayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MTaiwanRailwayRoutingModule { }
