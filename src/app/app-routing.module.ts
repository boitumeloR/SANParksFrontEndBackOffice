import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkComponent } from './pages/park/park.component';
import { AddParkComponent } from './modals/park/add-park/add-park.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { AccomodationTypeComponent } from './pages/accomodation-type/accomodation-type.component';
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
import { AccomodationBaseRateComponent } from './pages/accomodation-base-rate/accomodation-base-rate.component';
import { AccomodationAddRateComponent } from './pages/accomodation-add-rate/accomodation-add-rate.component';
import { AmenityTypeComponent } from './pages/amenity-type/amenity-type.component';
import { AmenityComponent } from './pages/amenity/amenity.component';
import { AmenityPenaltyComponent } from './pages/amenity-penalty/amenity-penalty.component';
import { ActivityTypeComponent } from './pages/activity-type/activity-type.component';
import { ActivitySlotComponent } from './pages/activity-slot/activity-slot.component';
import { ActivityRateComponent } from './pages/activity-rate/activity-rate.component';
import { UserRoleComponent } from './pages/user-role/user-role.component';
import { EmployeeComponent } from './pages/employee/employee.component';
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
  { //Perhaps we should have an actual home component
    path: 'home',
    component: ParkComponent
  },
  {
    path: 'addPark',
    component: AddParkComponent
  },
  {
    path: 'Activity',
    component: ActivityComponent
  },
  {
    path: 'Activity-Type',
    component: ActivityTypeComponent
  },
  {
    path: 'Activity-Slot',
    component: ActivitySlotComponent
  },
  {
    path: 'Accomodation',
    component: AccomodationComponent
  },
  {
    path: 'Accomodation-Type',
    component: AccomodationTypeComponent
  },
  {
    path: 'Accomodation-Base-Rate',
    component: AccomodationBaseRateComponent
  },
  {
    path: 'Accomodation-Add-Rate',
    component: AccomodationAddRateComponent
  },
  {
    path: 'Amenity-Type',
    component: AmenityTypeComponent
  },
  {
    path: 'Amenity',
    component: AmenityComponent
  },
  {
    path: 'Amenity-Penalty',
    component: AmenityPenaltyComponent
  },
  {
    path: 'Activity-Rate',
    component: ActivityRateComponent
  },
  {
    path: 'User-Role',
    component: UserRoleComponent
  },
  {
    path: 'Employee',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
