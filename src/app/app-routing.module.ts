import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkComponent } from './pages/park/park.component';
import { AddParkComponent } from './modals/park/add-park/add-park.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { AccomodationTypeComponent } from './pages/accomodation-type/accomodation-type.component';
import { BaseRatesComponent } from './pages/base-rates/base-rates.component';
import { AddRatesComponent } from './pages/add-rates/add-rates.component';
import { AmenityComponent } from './pages/amenity/amenity.component';
import { AmenityPenaltyComponent } from './pages/amenity-penalty/amenity-penalty.component';
import { ActivityRateComponent } from './pages/activity-rate/activity-rate.component';
import {ParkGateComponent} from './pages/park-gate/park-gate.component'
import { ParkGateTimeComponent } from './pages/park-gate-time/park-gate-time.component';
import {DailyConservationFeeComponent} from './pages/daily-conservation-fee/daily-conservation-fee.component';
import {SeasonComponent} from 'src/app/pages/season/season.component';
import { CampTypeComponent } from './pages/camp-type/camp-type.component';
import {CampComponent} from './pages/camp/camp.component'
import { CampGateTimeComponent } from './pages/camp-gate-time/camp-gate-time.component';
import { WildcardClusterComponent } from './pages/wildcard-cluster/wildcard-cluster.component';
import { WildcardCategoryComponent } from './pages/wildcard-category/wildcard-category.component';
import { WildcardRateComponent } from './pages/wildcard-rate/wildcard-rate.component';
const routes: Routes = [
  {
    path: 'Park',
    component: ParkComponent
  },{
    path: 'Park-Gate',
    component: ParkGateComponent
  },{
    path:'Park-Gate-Time',
    component: ParkGateTimeComponent
  },
  {
    path: 'Daily-Conservation-Fee',
    component: DailyConservationFeeComponent
  },
  {
    path: 'Season',
    component: SeasonComponent
  },{
    path: 'Camp-Type',
    component: CampTypeComponent
  },
  {
    path: 'Camp',
    component: CampComponent
  },{
    path: 'Camp-Gate-Time',
    component: CampGateTimeComponent
  },{
    path:'Wildcard-Cluster',
    component: WildcardClusterComponent
  },
  {
    path:'Wildcard-Category',
    component: WildcardCategoryComponent 
  },
  {
    path: 'Wildcard-Rate',
    component: WildcardRateComponent
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
    path: 'Accomodation-Type',
    component: AccomodationTypeComponent
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
