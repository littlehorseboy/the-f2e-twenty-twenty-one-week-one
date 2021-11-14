import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'taiwan-railway', loadChildren: () => import('./taiwan-railway/taiwan-railway.module').then(m => m.TaiwanRailwayModule) },
  { path: 'm-taiwan-railway', loadChildren: () => import('./m-taiwan-railway/m-taiwan-railway.module').then(m => m.MTaiwanRailwayModule) },
  {
    path: '',
    redirectTo: 'taiwan-railway',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
