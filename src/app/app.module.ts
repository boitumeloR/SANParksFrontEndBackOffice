import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './subcomponents/header/header.component';
import { ParkComponent } from './pages/park/park.component';
import { MainNavComponent } from './subcomponents/main-nav/main-nav.component';
import { AddParkComponent } from './modals/park/add-park/add-park.component';
import { UpdateParkComponent } from './modals/park/update-park/update-park.component';
import { DeleteParkComponent } from './modals/park/delete-park/delete-park.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ActivityRateComponent } from './pages/activity-rate/activity-rate.component';
import { AddActivityRateComponent } from './modals/activity-rate/add-activity-rate/add-activity-rate.component';
import { UpdateActivityRateComponent } from './modals/activity-rate/update-activity-rate/update-activity-rate.component';
import { DeleteActivityRateComponent } from './modals/activity-rate/delete-activity-rate/delete-activity-rate.component';
import { ViewParkComponent } from './modals/park/view-park/view-park.component';
import {UpdateParkConfirmationComponent} from 'src/app/modals/park/update-park-confirmation/update-park-confirmation.component';
import { AddParkConfirmationComponent } from './modals/park/add-park-confirmation/add-park-confirmation.component';
import { AddParkGateComponent } from './modals/park-gate/add-park-gate/add-park-gate.component';
import {ParkGateComponent} from './pages/park-gate/park-gate.component'
import {AddParkGateConfirmationComponent} from 'src/app/modals/park-gate/add-park-gate-confirmation/add-park-gate-confirmation.component';
import {ViewParkGateComponent} from 'src/app/modals/park-gate/view-park-gate/view-park-gate.component';
import {UpdateParkGateComponent} from 'src/app/modals/park-gate/update-park-gate/update-park-gate.component';
import {UpdateParkGateConfirmationComponent} from 'src/app/modals/park-gate/update-park-gate-confirmation/update-park-gate-confirmation.component';
import {DeleteParkGateComponent} from 'src/app/modals/park-gate/delete-park-gate/delete-park-gate.component';
import { ParkGateTimeComponent } from 'src/app/pages/park-gate-time/park-gate-time.component';
import { AddParkGateTimeComponent } from 'src/app/modals/park-gate-time/add-park-gate-time/add-park-gate-time.component';
import { UpdateParkGateTimeComponent } from 'src/app/modals/park-gate-time/update-park-gate-time/update-park-gate-time.component';
import { DeleteParkGateTimeComponent } from 'src/app/modals/park-gate-time/delete-park-gate-time/delete-park-gate-time.component';
import { UpdateParkGateTimeConfirmationComponent } from 'src/app/modals/park-gate-time/update-park-gate-time-confirmation/update-park-gate-time-confirmation.component';
import { ViewParkGateTimeComponent } from 'src/app/modals/park-gate-time/view-park-gate-time/view-park-gate-time.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AddParkGateTimeConfirmationComponent } from './modals/park-gate-time/add-park-gate-time-confirmation/add-park-gate-time-confirmation.component';
import { DailyConservationFeeComponent } from 'src/app/pages/daily-conservation-fee/daily-conservation-fee.component';
import { AddDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee/add-daily-conservation-fee.component';
import { AddDailyConservationFeeConfirmationComponent } from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-confirmation/add-daily-conservation-fee-confirmation.component';
import { DeleteDailyConservationFeeConfirmationComponent } from 'src/app/modals/daily-conservation-fee/delete-daily-conservation-fee-confirmation/delete-daily-conservation-fee-confirmation.component';
import { UpdateDailyConservationFeeConfirmationComponent } from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-confirmation/update-daily-conservation-fee-confirmation.component';
import { UpdateDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee/update-daily-conservation-fee.component';
import { ViewDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/view-daily-conservation-fee/view-daily-conservation-fee.component';
import {MatNativeDateModule} from '@angular/material/core';
import { SeasonComponent } from './pages/season/season.component';
import { AddSeasonComponent } from './modals/season/add-season/add-season.component';
import { AddSeasonConfirmationComponent } from './modals/season/add-season-confirmation/add-season-confirmation.component';
import { UpdateSeasonConfirmationComponent } from './modals/season/update-season-confirmation/update-season-confirmation.component';
import { UpdateSeasonComponent } from './modals/season/update-season/update-season.component';
import { DeleteSeasonComponent } from './modals/season/delete-season/delete-season.component';
import { ViewSeasonComponent } from './modals/season/view-season/view-season.component';
import { CampTypeComponent } from './pages/camp-type/camp-type.component';
import { AddCampTypeComponent } from './modals/camp-type/add-camp-type/add-camp-type.component';
import { AddCampTypeConfirmationComponent } from './modals/camp-type/add-camp-type-confirmation/add-camp-type-confirmation.component';
import { UpdateCampTypeConfirmationComponent } from './modals/camp-type/update-camp-type-confirmation/update-camp-type-confirmation.component';
import { UpdateCampTypeComponent } from './modals/camp-type/update-camp-type/update-camp-type.component';
import { ViewCampTypeComponent } from './modals/camp-type/view-camp-type/view-camp-type.component';
import { DeleteCampTypeComponent } from './modals/camp-type/delete-camp-type/delete-camp-type.component';
import { CampComponent } from './pages/camp/camp.component';
import { AddCampComponent } from './modals/camp/add-camp/add-camp.component';
import { AddCampConfirmationComponent } from './modals/camp/add-camp-confirmation/add-camp-confirmation.component';
import { UpdateCampComponent } from './modals/camp/update-camp/update-camp.component';
import { UpdateCampConfirmationComponent } from './modals/camp/update-camp-confirmation/update-camp-confirmation.component';
import { DeleteCampComponent } from './modals/camp/delete-camp/delete-camp.component';
import { ViewCampComponent } from './modals/camp/view-camp/view-camp.component';
import { CampGateTimeComponent } from './pages/camp-gate-time/camp-gate-time.component';
import { AddCampGateTimeComponent } from './modals/camp-gate-time/add-camp-gate-time/add-camp-gate-time.component';
import { AddCampGateTimeConfirmationComponent } from './modals/camp-gate-time/add-camp-gate-time-confirmation/add-camp-gate-time-confirmation.component';
import { UpdateCampGateTimeConfirmationComponent } from './modals/camp-gate-time/update-camp-gate-time-confirmation/update-camp-gate-time-confirmation.component';
import { UpdateCampGateTimeComponent } from './modals/camp-gate-time/update-camp-gate-time/update-camp-gate-time.component';
import { DeleteCampGateTimeComponent } from './modals/camp-gate-time/delete-camp-gate-time/delete-camp-gate-time.component';
import { ViewCampGateTimeComponent } from './modals/camp-gate-time/view-camp-gate-time/view-camp-gate-time.component';
import { WildcardClusterComponent } from './pages/wildcard-cluster/wildcard-cluster.component';
import { AddWildcardClusterComponent } from './modals/wildcard-cluster/add-wildcard-cluster/add-wildcard-cluster.component';
import { AddWildcardClusterConfirmationComponent } from './modals/wildcard-cluster/add-wildcard-cluster-confirmation/add-wildcard-cluster-confirmation.component';
import { UpdateWildcardClusterConfirmationComponent } from './modals/wildcard-cluster/update-wildcard-cluster-confirmation/update-wildcard-cluster-confirmation.component';
import { UpdateWildcardClusterComponent } from './modals/wildcard-cluster/update-wildcard-cluster/update-wildcard-cluster.component';
import { DeleteWildcardClusterComponent } from './modals/wildcard-cluster/delete-wildcard-cluster/delete-wildcard-cluster.component';
import { ViewWildcardClusterComponent } from './modals/wildcard-cluster/view-wildcard-cluster/view-wildcard-cluster.component';
import { WildcardCategoryComponent } from './pages/wildcard-category/wildcard-category.component';
import { AddWildcardCategoryComponent } from './modals/wildcard-category/add-wildcard-category/add-wildcard-category.component';
import { AddWildcardCategoryConfirmationComponent } from './modals/wildcard-category/add-wildcard-category-confirmation/add-wildcard-category-confirmation.component';
import { UpdateWildcardCategoryConfirmationComponent } from './modals/wildcard-category/update-wildcard-category-confirmation/update-wildcard-category-confirmation.component';
import { UpdateWildcardCategoryComponent } from './modals/wildcard-category/update-wildcard-category/update-wildcard-category.component';
import { DeleteWildcardCategoryComponent } from './modals/wildcard-category/delete-wildcard-category/delete-wildcard-category.component';
import { ViewWildcardCategoryComponent } from './modals/wildcard-category/view-wildcard-category/view-wildcard-category.component';
import { WildcardRateComponent } from './pages/wildcard-rate/wildcard-rate.component';
import { AddWildcardRateComponent } from './modals/wildcard-rate/add-wildcard-rate/add-wildcard-rate.component';
import { AddWildcardRateConfirmationComponent } from './modals/wildcard-rate/add-wildcard-rate-confirmation/add-wildcard-rate-confirmation.component';
import { UpdateWildcardRateConfirmationComponent } from './modals/wildcard-rate/update-wildcard-rate-confirmation/update-wildcard-rate-confirmation.component';
import { UpdateWildcardRateComponent } from './modals/wildcard-rate/update-wildcard-rate/update-wildcard-rate.component';
import { DeleteWildcardRateComponent } from './modals/wildcard-rate/delete-wildcard-rate/delete-wildcard-rate.component';
import { ViewWildcardRateComponent } from './modals/wildcard-rate/view-wildcard-rate/view-wildcard-rate.component';
import { AccomodationTypeComponent } from './pages/accomodation-type/accomodation-type.component';
import { AddAccomodationTypeComponent } from './modals/accomodation-type/add-accomodation-type/add-accomodation-type.component';
import { UpdateAccomodationTypeComponent } from './modals/accomodation-type/update-accomodation-type/update-accomodation-type.component';
import { UpdateAccomodationTypeConfirmationComponent } from './modals/accomodation-type/update-accomodation-type-confirmation/update-accomodation-type-confirmation.component';
import { AddAccomodationTypeConfirmationComponent } from './modals/accomodation-type/add-accomodation-type-confirmation/add-accomodation-type-confirmation.component';
import { DeleteAccomodationTypeComponent } from './modals/accomodation-type/delete-accomodation-type/delete-accomodation-type.component';
import { ViewAccomodationTypeComponent } from './modals/accomodation-type/view-accomodation-type/view-accomodation-type.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { AddAccomodationComponent } from './modals/accomodation/add-accomodation/add-accomodation.component';
import { AddAccomodationConfirmationComponent } from './modals/accomodation/add-accomodation-confirmation/add-accomodation-confirmation.component';
import { UpdateAccomodationConfirmationComponent } from './modals/accomodation/update-accomodation-confirmation/update-accomodation-confirmation.component';
import { UpdateAccomodationComponent } from './modals/accomodation/update-accomodation/update-accomodation.component';
import { DeleteAccomodationComponent } from './modals/accomodation/delete-accomodation/delete-accomodation.component';
import { ViewAccomodationComponent } from './modals/accomodation/view-accomodation/view-accomodation.component';
import { AccomodationBaseRateComponent } from './pages/accomodation-base-rate/accomodation-base-rate.component';
import { AddAccomodationBaseRateComponent } from './modals/accomodation-base-rate/add-accomodation-base-rate/add-accomodation-base-rate.component';
import { AddAccomodationBaseRateConfirmationComponent } from './modals/accomodation-base-rate/add-accomodation-base-rate-confirmation/add-accomodation-base-rate-confirmation.component';
import { UpdateAccomodationBaseRateConfirmationComponent } from './modals/accomodation-base-rate/update-accomodation-base-rate-confirmation/update-accomodation-base-rate-confirmation.component';
import { UpdateAccomodationBaseRateComponent } from './modals/accomodation-base-rate/update-accomodation-base-rate/update-accomodation-base-rate.component';
import { DeleteAccomodationBaseRateComponent } from './modals/accomodation-base-rate/delete-accomodation-base-rate/delete-accomodation-base-rate.component';
import { ViewAccomodationBaseRateComponent } from './modals/accomodation-base-rate/view-accomodation-base-rate/view-accomodation-base-rate.component';
import { AccomodationAddRateComponent } from './pages/accomodation-add-rate/accomodation-add-rate.component';
import { AddAccomodationAddRateComponent } from './modals/accomodation-add-rate/add-accomodation-add-rate/add-accomodation-add-rate.component';
import { AddAccomodationAddRateConfirmationComponent } from './modals/accomodation-add-rate/add-accomodation-add-rate-confirmation/add-accomodation-add-rate-confirmation.component';
import { UpdateAccomodationAddRateConfirmationComponent } from './modals/accomodation-add-rate/update-accomodation-add-rate-confirmation/update-accomodation-add-rate-confirmation.component';
import { UpdateAccomodationAddRateComponent } from './modals/accomodation-add-rate/update-accomodation-add-rate/update-accomodation-add-rate.component';
import { DeleteAccomodationAddRateComponent } from './modals/accomodation-add-rate/delete-accomodation-add-rate/delete-accomodation-add-rate.component';
import { ViewAccomodationAddRateComponent } from './modals/accomodation-add-rate/view-accomodation-add-rate/view-accomodation-add-rate.component';
import { AmenityTypeComponent } from './pages/amenity-type/amenity-type.component';
import { AddAmentityTypeComponent } from './modals/amenity-type/add-amentity-type/add-amentity-type.component';
import { UpdateAmentityTypeComponent } from './modals/amenity-type/update-amentity-type/update-amentity-type.component';
import { UpdateAmentityTypeConfirmationComponent } from './modals/amenity-type/update-amentity-type-confirmation/update-amentity-type-confirmation.component';
import { AddAmentityTypeConfirmationComponent } from './modals/amenity-type/add-amentity-type-confirmation/add-amentity-type-confirmation.component';
import { DeleteAmentityTypeConfirmationComponent } from './modals/amenity-type/delete-amentity-type-confirmation/delete-amentity-type-confirmation.component';
import { ViewAmentityTypeConfirmationComponent } from './modals/amenity-type/view-amentity-type-confirmation/view-amentity-type-confirmation.component';
import { AmenityComponent } from './pages/amenity/amenity.component';
import { AddAmenityConfirmationComponent } from './modals/amenity/add-amenity-confirmation/add-amenity-confirmation.component';
import { UpdateAmenityConfirmationComponent } from './modals/amenity/update-amenity-confirmation/update-amenity-confirmation.component';
import { ViewAmenityComponent } from './modals/amenity/view-amenity/view-amenity.component';
import { AddAmenityComponent } from './modals/amenity/add-amenity/add-amenity.component';
import { UpdateAmenityComponent } from './modals/amenity/update-amenity/update-amenity.component';
import { DeleteAmenityComponent } from './modals/amenity/delete-amenity/delete-amenity.component';
import { AmenityPenaltyComponent } from './pages/amenity-penalty/amenity-penalty.component';
import { AddAmenityPenaltyComponent } from './modals/amenity-penalty/add-amenity-penalty/add-amenity-penalty.component';
import { AddAmenityPenaltyConfirmationComponent } from './modals/amenity-penalty/add-amenity-penalty-confirmation/add-amenity-penalty-confirmation.component';
import { UpdateAmenityPenaltyConfirmationComponent } from './modals/amenity-penalty/update-amenity-penalty-confirmation/update-amenity-penalty-confirmation.component';
import { UpdateAmenityPenaltyComponent } from './modals/amenity-penalty/update-amenity-penalty/update-amenity-penalty.component';
import { ViewAmenityPenaltyComponent } from './modals/amenity-penalty/view-amenity-penalty/view-amenity-penalty.component';
import { DeleteAmenityPenaltyComponent } from './modals/amenity-penalty/delete-amenity-penalty/delete-amenity-penalty.component';
import { ActivityTypeComponent } from './pages/activity-type/activity-type.component';
import { AddActivityTypeComponent } from './modals/activity-type/add-activity-type/add-activity-type.component';
import { AddActivityTypeConfirmationComponent } from './modals/activity-type/add-activity-type-confirmation/add-activity-type-confirmation.component';
import { UpdateActivityTypeConfirmationComponent } from './modals/activity-type/update-activity-type-confirmation/update-activity-type-confirmation.component';
import { UpdateActivityTypeComponent } from './modals/activity-type/update-activity-type/update-activity-type.component';
import { ViewActivityTypeComponent } from './modals/activity-type/view-activity-type/view-activity-type.component';
import { DeleteActivityTypeComponent } from './modals/activity-type/delete-activity-type/delete-activity-type.component';
import { AddActivityConfirmationComponent } from './modals/activity/add-activity-confirmation/add-activity-confirmation.component';
import { UpdateActivityConfirmationComponent } from './modals/activity/update-activity-confirmation/update-activity-confirmation.component';
import { AddActivityComponent } from './modals/activity/add-activity/add-activity.component';
import { ViewActivityComponent } from './modals/activity/view-activity/view-activity.component';
import { UpdateActivityComponent } from './modals/activity/update-activity/update-activity.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { DeleteActivityComponent } from './modals/activity/delete-activity/delete-activity.component';
import { ActivitySlotComponent } from './pages/activity-slot/activity-slot.component';
import { AddActivitySlotComponent } from './modals/activity-slot/add-activity-slot/add-activity-slot.component';
import { AddActivitySlotConfirmationComponent } from './modals/activity-slot/add-activity-slot-confirmation/add-activity-slot-confirmation.component';
import { UpdateActivitySlotConfirmationComponent } from './modals/activity-slot/update-activity-slot-confirmation/update-activity-slot-confirmation.component';
import { ViewActivitySlotComponent } from './modals/activity-slot/view-activity-slot/view-activity-slot.component';
import { DeleteActivitySlotComponent } from './modals/activity-slot/delete-activity-slot/delete-activity-slot.component';
import { UpdateActivitySlotComponent } from './modals/activity-slot/update-activity-slot/update-activity-slot.component';
import { AddActivityRateConfirmationComponent } from './modals/activity-rate/add-activity-rate-confirmation/add-activity-rate-confirmation.component';
import { UpdateActivityRateConfirmationComponent } from './modals/activity-rate/update-activity-rate-confirmation/update-activity-rate-confirmation.component';
import { ViewActivityRateComponent } from './modals/activity-rate/view-activity-rate/view-activity-rate.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParkComponent,
    MainNavComponent,
    AddParkComponent,
    UpdateParkComponent,
    DeleteParkComponent,
    ActivityRateComponent,
    AddActivityRateComponent,
    UpdateActivityRateComponent,
    DeleteActivityRateComponent,
    ViewParkComponent,
    UpdateParkConfirmationComponent,
    AddParkConfirmationComponent,
    AddParkGateComponent,
    ParkGateComponent,
    AddParkGateConfirmationComponent,
    ViewParkGateComponent,
    UpdateParkGateComponent,
    UpdateParkGateConfirmationComponent,
    DeleteParkGateComponent,
    ParkGateTimeComponent,
    AddParkGateTimeComponent,
    UpdateParkGateTimeComponent,
    DeleteParkGateTimeComponent,
    UpdateParkGateTimeConfirmationComponent,
    ViewParkGateTimeComponent,
    AddParkGateTimeConfirmationComponent,
    DailyConservationFeeComponent,
    AddDailyConservationFeeComponent,
    AddDailyConservationFeeConfirmationComponent,
    DeleteDailyConservationFeeConfirmationComponent,
    UpdateDailyConservationFeeConfirmationComponent,
    UpdateDailyConservationFeeComponent,
    ViewDailyConservationFeeComponent,
    SeasonComponent,
    AddSeasonComponent,
    AddSeasonConfirmationComponent,
    UpdateSeasonConfirmationComponent,
    UpdateSeasonComponent,
    DeleteSeasonComponent,
    ViewSeasonComponent,
    CampTypeComponent,
    AddCampTypeComponent,
    AddCampTypeConfirmationComponent,
    UpdateCampTypeConfirmationComponent,
    UpdateCampTypeComponent,
    ViewCampTypeComponent,
    DeleteCampTypeComponent,
    CampComponent,
    AddCampComponent,
    AddCampConfirmationComponent,
    UpdateCampComponent,
    UpdateCampConfirmationComponent,
    DeleteCampComponent,
    ViewCampComponent,
    CampGateTimeComponent,
    AddCampGateTimeComponent,
    AddCampGateTimeConfirmationComponent,
    UpdateCampGateTimeConfirmationComponent,
    UpdateCampGateTimeComponent,
    DeleteCampGateTimeComponent,
    ViewCampGateTimeComponent,
    WildcardClusterComponent,
    AddWildcardClusterComponent,
    AddWildcardClusterConfirmationComponent,
    UpdateWildcardClusterConfirmationComponent,
    UpdateWildcardClusterComponent,
    DeleteWildcardClusterComponent,
    ViewWildcardClusterComponent,
    WildcardCategoryComponent,
    AddWildcardCategoryComponent,
    AddWildcardCategoryConfirmationComponent,
    UpdateWildcardCategoryConfirmationComponent,
    UpdateWildcardCategoryComponent,
    DeleteWildcardCategoryComponent,
    ViewWildcardCategoryComponent,
    WildcardRateComponent,
    AddWildcardRateComponent,
    AddWildcardRateConfirmationComponent,
    UpdateWildcardRateConfirmationComponent,
    UpdateWildcardRateComponent,
    DeleteWildcardRateComponent,
    ViewWildcardRateComponent,
    AccomodationTypeComponent,
    AddAccomodationTypeComponent,
    UpdateAccomodationTypeComponent,
    UpdateAccomodationTypeConfirmationComponent,
    AddAccomodationTypeConfirmationComponent,
    DeleteAccomodationTypeComponent,
    ViewAccomodationTypeComponent,
    AccomodationComponent,
    AddAccomodationComponent,
    AddAccomodationConfirmationComponent,
    UpdateAccomodationConfirmationComponent,
    UpdateAccomodationComponent,
    DeleteAccomodationComponent,
    ViewAccomodationComponent,
    AccomodationBaseRateComponent,
    AddAccomodationBaseRateComponent,
    AddAccomodationBaseRateConfirmationComponent,
    UpdateAccomodationBaseRateConfirmationComponent,
    UpdateAccomodationBaseRateComponent,
    DeleteAccomodationBaseRateComponent,
    ViewAccomodationBaseRateComponent,
    AccomodationAddRateComponent,
    AddAccomodationAddRateComponent,
    AddAccomodationAddRateConfirmationComponent,
    UpdateAccomodationAddRateConfirmationComponent,
    UpdateAccomodationAddRateComponent,
    DeleteAccomodationAddRateComponent,
    ViewAccomodationAddRateComponent,
    AmenityTypeComponent,
    AddAmentityTypeComponent,
    UpdateAmentityTypeComponent,
    UpdateAmentityTypeConfirmationComponent,
    AddAmentityTypeConfirmationComponent,
    DeleteAmentityTypeConfirmationComponent,
    ViewAmentityTypeConfirmationComponent,
    AmenityComponent,
    AddAmenityConfirmationComponent,
    UpdateAmenityConfirmationComponent,
    ViewAmenityComponent,
    AddAmenityComponent,
    UpdateAmenityComponent,
    DeleteAmenityComponent,
    AmenityPenaltyComponent,
    AddAmenityPenaltyComponent,
    AddAmenityPenaltyConfirmationComponent,
    UpdateAmenityPenaltyConfirmationComponent,
    UpdateAmenityPenaltyComponent,
    ViewAmenityPenaltyComponent,
    DeleteAmenityPenaltyComponent,
    ActivityTypeComponent,
    AddActivityTypeComponent,
    AddActivityTypeConfirmationComponent,
    UpdateActivityTypeConfirmationComponent,
    UpdateActivityTypeComponent,
    ViewActivityTypeComponent,
    DeleteActivityTypeComponent,
    AddActivityConfirmationComponent,
    UpdateActivityConfirmationComponent,
    ViewActivityComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    ActivityComponent,
    DeleteActivityComponent,
    ActivitySlotComponent,
    AddActivitySlotComponent,
    AddActivitySlotConfirmationComponent,
    UpdateActivitySlotConfirmationComponent,
    ViewActivitySlotComponent,
    DeleteActivitySlotComponent,
    UpdateActivitySlotComponent,
    AddActivityRateConfirmationComponent,
    UpdateActivityRateConfirmationComponent,
    ViewActivityRateComponent
  ],
  entryComponents: [
    AddParkComponent,
    UpdateParkComponent,
    DeleteParkComponent,
    AddParkGateComponent
  ],
  imports: [
    SimplebarAngularModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
