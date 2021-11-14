import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaiwanRailwayComponent } from './taiwan-railway.component';

const routes: Routes = [{
  path: '', component: TaiwanRailwayComponent, pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaiwanRailwayRoutingModule { }
