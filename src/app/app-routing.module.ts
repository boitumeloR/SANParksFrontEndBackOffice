import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkComponent } from './pages/park/park.component';
import { AddParkComponent } from './modals/park/add-park/add-park.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { AccommodationTypeComponent } from './pages/accommodation-type/accommodation-type.component';
import { BaseRatesComponent } from './pages/base-rates/base-rates.component';
import { AddRatesComponent } from './pages/add-rates/add-rates.component';
import { AmenityComponent } from './pages/amenity/amenity.component';
import { AmenityPenaltyComponent } from './pages/amenity-penalty/amenity-penalty.component';
import { ActivityRateComponent } from './pages/activity-rate/activity-rate.component';


const routes: Routes = [
  {
    path: 'Park',
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
  },
  {
    path: 'add-rate',
    component: AddRatesComponent
  },
  {
    path: 'amenity',
    component: AmenityComponent
  },
  {
    path: 'amenity-penalty',
    component: AmenityPenaltyComponent
  },
  {
    path: 'activity-rate',
    component: ActivityRateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
