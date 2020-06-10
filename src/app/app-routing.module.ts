import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkComponent } from './pages/park/park.component';
import { AddParkComponent } from './modals/park/add-park/add-park.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { AccommodationTypeComponent } from './pages/accommodation-type/accommodation-type.component';
import { BaseRatesComponent } from './pages/base-rates/base-rates.component';


const routes: Routes = [
  {
    path: '',
    component: ParkComponent
  },
  {
    path: 'home',
    component: ParkComponent
  },
  {
    path: 'addPark',
    component: AddParkComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: 'accommodation-type',
    component: AccommodationTypeComponent
  },
  {
    path: 'base-rate',
    component: BaseRatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
