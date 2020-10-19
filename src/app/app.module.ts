import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import {ParkGateComponent} from './pages/park-gate/park-gate.component';
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
import { UserRoleComponent } from './pages/user-role/user-role.component';
import { AddUserRoleComponent } from './modals/user-role/add-user-role/add-user-role.component';
import { AddUserRoleConfirmationComponent } from './modals/user-role/add-user-role-confirmation/add-user-role-confirmation.component';
import { UpdateUserRoleConfirmationComponent } from './modals/user-role/update-user-role-confirmation/update-user-role-confirmation.component';
import { UpdateUserRoleComponent } from './modals/user-role/update-user-role/update-user-role.component';
import { ViewUserRoleComponent } from './modals/user-role/view-user-role/view-user-role.component';
import { DeleteUserRoleComponent } from './modals/user-role/delete-user-role/delete-user-role.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddEmployeeComponent } from './modals/employee/add-employee/add-employee.component';
import { AddEmployeeConfirmationComponent } from './modals/employee/add-employee-confirmation/add-employee-confirmation.component';
import { UpdateEmployeeConfirmationComponent } from './modals/employee/update-employee-confirmation/update-employee-confirmation.component';
import { UpdateEmployeeComponent } from './modals/employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './modals/employee/view-employee/view-employee.component';
import { CancelAlertComponent } from './modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddAccomodationSuccessfulComponent } from './modals/accomodation/add-accomodation-successful/add-accomodation-successful.component';
import { UpdateAccomodationSuccessfulComponent } from './modals/accomodation/update-accomodation-successful/update-accomodation-successful.component';
import { DeleteAccomodationSuccessfulComponent } from './modals/accomodation/delete-accomodation-successful/delete-accomodation-successful.component';
import { DeleteAccomodationAddRateSuccessfulComponent } from './modals/accomodation-add-rate/delete-accomodation-add-rate-successful/delete-accomodation-add-rate-successful.component';
import { UpdateAccomodationAddRateSuccessfulComponent } from './modals/accomodation-add-rate/update-accomodation-add-rate-successful/update-accomodation-add-rate-successful.component';
import { AddAccomodationAddRateSuccessfulComponent } from './modals/accomodation-add-rate/add-accomodation-add-rate-successful/add-accomodation-add-rate-successful.component';
import { AddAccomodationBaseRateSuccessfulComponent } from './modals/accomodation-base-rate/add-accomodation-base-rate-successful/add-accomodation-base-rate-successful.component';
import { UpdateAccomodationBaseRateSuccessfulComponent } from './modals/accomodation-base-rate/update-accomodation-base-rate-successful/update-accomodation-base-rate-successful.component';
import { DeleteAccomodationBaseRateSuccessfulComponent } from './modals/accomodation-base-rate/delete-accomodation-base-rate-successful/delete-accomodation-base-rate-successful.component';
import { AddAccomodationTypeSuccessfulComponent } from './modals/accomodation-type/add-accomodation-type-successful/add-accomodation-type-successful.component';
import { UpdateAccomodationTypeSuccessfulComponent } from './modals/accomodation-type/update-accomodation-type-successful/update-accomodation-type-successful.component';
import { DeleteAccomodationTypeSuccessfulComponent } from './modals/accomodation-type/delete-accomodation-type-successful/delete-accomodation-type-successful.component';
import { DeleteActivitySuccessfulComponent } from './modals/activity/delete-activity-successful/delete-activity-successful.component';
import { UpdateActivitySuccessfulComponent } from './modals/activity/update-activity-successful/update-activity-successful.component';
import { AddActivitySuccessfulComponent } from './modals/activity/add-activity-successful/add-activity-successful.component';
import { UpdateActivityRateSuccessfulComponent } from './modals/activity-rate/update-activity-rate-successful/update-activity-rate-successful.component';
import { DeleteActivityRateSuccessfulComponent } from './modals/activity-rate/delete-activity-rate-successful/delete-activity-rate-successful.component';
import { DeleteActivitySlotSuccessfulComponent } from './modals/activity-slot/delete-activity-slot-successful/delete-activity-slot-successful.component';
import { UpdateActivitySlotSuccessfulComponent } from './modals/activity-slot/update-activity-slot-successful/update-activity-slot-successful.component';
import { AddActivitySlotSuccessfulComponent } from './modals/activity-slot/add-activity-slot-successful/add-activity-slot-successful.component';
import { UpdateActivityTypeSuccessfulComponent } from './modals/activity-type/update-activity-type-successful/update-activity-type-successful.component';
import { AddActivityTypeSuccessfulComponent } from './modals/activity-type/add-activity-type-successful/add-activity-type-successful.component';
import { DeleteActivityTypeSuccessfulComponent } from './modals/activity-type/delete-activity-type-successful/delete-activity-type-successful.component';
import { DeleteAmenitySuccessfulComponent } from './modals/amenity/delete-amenity-successful/delete-amenity-successful.component';
import { AddAmenitySuccessfulComponent } from './modals/amenity/add-amenity-successful/add-amenity-successful.component';
import { UpdateAmenitySuccessfulComponent } from './modals/amenity/update-amenity-successful/update-amenity-successful.component';
import { AddAmenityPenaltySuccessfulComponent } from './modals/amenity-penalty/add-amenity-penalty-successful/add-amenity-penalty-successful.component';
import { DeleteAmenityPenaltySuccessfulComponent } from './modals/amenity-penalty/delete-amenity-penalty-successful/delete-amenity-penalty-successful.component';
import { UpdateAmenityPenaltySuccessfulComponent } from './modals/amenity-penalty/update-amenity-penalty-successful/update-amenity-penalty-successful.component';
import { AddAmenityTypeSuccessfulComponent } from './modals/amenity-type/add-amenity-type-successful/add-amenity-type-successful.component';
import { DeleteAmenityTypeSuccessfulComponent } from './modals/amenity-type/delete-amenity-type-successful/delete-amenity-type-successful.component';
import { UpdateAmenityTypeSuccessfulComponent } from './modals/amenity-type/update-amenity-type-successful/update-amenity-type-successful.component';
import { AddActivityRateSuccessfulComponent } from './modals/activity-rate/add-activity-rate-successful/add-activity-rate-successful.component';
import { UpdateCampSuccessfulComponent } from './modals/camp/update-camp-successful/update-camp-successful.component';
import { AddCampSuccessfulComponent } from './modals/camp/add-camp-successful/add-camp-successful.component';
import { DeleteCampSuccessfulComponent } from './modals/camp/delete-camp-successful/delete-camp-successful.component';
import { DeleteCampGateTimeSuccessfulComponent } from './modals/camp-gate-time/delete-camp-gate-time-successful/delete-camp-gate-time-successful.component';
import { AddCampGateTimeSuccessfulComponent } from './modals/camp-gate-time/add-camp-gate-time-successful/add-camp-gate-time-successful.component';
import { UpdateCampGateTimeSuccessfulComponent } from './modals/camp-gate-time/update-camp-gate-time-successful/update-camp-gate-time-successful.component';
import { UpdateCampTypeSuccessfulComponent } from './modals/camp-type/update-camp-type-successful/update-camp-type-successful.component';
import { AddCampTypeSuccessfulComponent } from './modals/camp-type/add-camp-type-successful/add-camp-type-successful.component';
import { DeleteCampTypeSuccessfulComponent } from './modals/camp-type/delete-camp-type-successful/delete-camp-type-successful.component';
import { DeleteDailyConservationFeeSuccessfulComponent } from './modals/daily-conservation-fee/delete-daily-conservation-fee-successful/delete-daily-conservation-fee-successful.component';
import { AddDailyConservationFeeSuccessfulComponent } from './modals/daily-conservation-fee/add-daily-conservation-fee-successful/add-daily-conservation-fee-successful.component';
import { UpdateDailyConservationFeeSuccessfulComponent } from './modals/daily-conservation-fee/update-daily-conservation-fee-successful/update-daily-conservation-fee-successful.component';
import { UpdateEmployeeSuccessfulComponent } from './modals/employee/update-employee-successful/update-employee-successful.component';
import { AddEmployeeSuccessfulComponent } from './modals/employee/add-employee-successful/add-employee-successful.component';
import { AddParkSuccessfulComponent } from './modals/park/add-park-successful/add-park-successful.component';
import { DeleteParkSuccessfulComponent } from './modals/park/delete-park-successful/delete-park-successful.component';
import { UpdateParkSuccessfulComponent } from './modals/park/update-park-successful/update-park-successful.component';
import { AddParkGateSuccessfulComponent } from './modals/park-gate/add-park-gate-successful/add-park-gate-successful.component';
import { DeleteParkGateSuccessfulComponent } from './modals/park-gate/delete-park-gate-successful/delete-park-gate-successful.component';
import { UpdateParkGateSuccessfulComponent } from './modals/park-gate/update-park-gate-successful/update-park-gate-successful.component';
import { AddParkGateTimeSuccessfulComponent } from './modals/park-gate-time/add-park-gate-time-successful/add-park-gate-time-successful.component';
import { UpdateParkGateTimeSuccessfulComponent } from './modals/park-gate-time/update-park-gate-time-successful/update-park-gate-time-successful.component';
import { DelteParkGateTimeSuccessfulComponent } from './modals/park-gate-time/delte-park-gate-time-successful/delte-park-gate-time-successful.component';
import { DelteSeasonSuccessfulComponent } from './modals/season/delte-season-successful/delte-season-successful.component';
import { AddSeasonSuccessfulComponent } from './modals/season/add-season-successful/add-season-successful.component';
import { UpdateSeasonSuccessfulComponent } from './modals/season/update-season-successful/update-season-successful.component';
import { UpdateUserRoleSuccessfulComponent } from './modals/user-role/update-user-role-successful/update-user-role-successful.component';
import { AddUserRoleSuccessfulComponent } from './modals/user-role/add-user-role-successful/add-user-role-successful.component';
import { DeleteUserRoleSuccessfulComponent } from './modals/user-role/delete-user-role-successful/delete-user-role-successful.component';
import { DeleteWildcardCategorySuccessfulComponent } from './modals/wildcard-category/delete-wildcard-category-successful/delete-wildcard-category-successful.component';
import { AddWildcardCategorySuccessfulComponent } from './modals/wildcard-category/add-wildcard-category-successful/add-wildcard-category-successful.component';
import { UpdateWildcardCategorySuccessfulComponent } from './modals/wildcard-category/update-wildcard-category-successful/update-wildcard-category-successful.component';
import { UpdateWildcardClusterSuccessfulComponent } from './modals/wildcard-cluster/update-wildcard-cluster-successful/update-wildcard-cluster-successful.component';
import { AddWildcardClusterSuccessfulComponent } from './modals/wildcard-cluster/add-wildcard-cluster-successful/add-wildcard-cluster-successful.component';
import { DeleteWildcardClusterSuccessfulComponent } from './modals/wildcard-cluster/delete-wildcard-cluster-successful/delete-wildcard-cluster-successful.component';
import { DeleteWildcardRateSuccessfulComponent } from './modals/wildcard-rate/delete-wildcard-rate-successful/delete-wildcard-rate-successful.component';
import { AddWildcardRateSuccessfulComponent } from './modals/wildcard-rate/add-wildcard-rate-successful/add-wildcard-rate-successful.component';
import { UpdateWildcardRateSuccessfulComponent } from './modals/wildcard-rate/update-wildcard-rate-successful/update-wildcard-rate-successful.component';
import { AddAccomodationUnsuccessfulComponent } from './modals/accomodation/add-accomodation-unsuccessful/add-accomodation-unsuccessful.component';
import { UpdateAccomodationUnsuccessfulComponent } from './modals/accomodation/update-accomodation-unsuccessful/update-accomodation-unsuccessful.component';
import { DeleteAccomodationUnsuccessfulComponent } from './modals/accomodation/delete-accomodation-unsuccessful/delete-accomodation-unsuccessful.component';
import { AddAccomodationAddRateUnsuccessfulComponent } from './modals/accomodation-add-rate/add-accomodation-add-rate-unsuccessful/add-accomodation-add-rate-unsuccessful.component';
import { UpdateAccomodationAddRateUnsuccessfulComponent } from './modals/accomodation-add-rate/update-accomodation-add-rate-unsuccessful/update-accomodation-add-rate-unsuccessful.component';
import { DeleteAccomodationAddRateUnsuccessfulComponent } from './modals/accomodation-add-rate/delete-accomodation-add-rate-unsuccessful/delete-accomodation-add-rate-unsuccessful.component';
import { AddAccomodationBaseRateUnsuccessfulComponent } from './modals/accomodation-base-rate/add-accomodation-base-rate-unsuccessful/add-accomodation-base-rate-unsuccessful.component';
import { UpdateAccomodationBaseRateUnsuccessfulComponent } from './modals/accomodation-base-rate/update-accomodation-base-rate-unsuccessful/update-accomodation-base-rate-unsuccessful.component';
import { DeleteAccomodationBaseRateUnsuccessfulComponent } from './modals/accomodation-base-rate/delete-accomodation-base-rate-unsuccessful/delete-accomodation-base-rate-unsuccessful.component';
import { DeleteAccomodationTypeUnsuccessfulComponent } from './modals/accomodation-type/delete-accomodation-type-unsuccessful/delete-accomodation-type-unsuccessful.component';
import { AddAccomodationTypeUnsuccessfulComponent } from './modals/accomodation-type/add-accomodation-type-unsuccessful/add-accomodation-type-unsuccessful.component';
import { UpdateAccomodationTypeUnsuccessfulComponent } from './modals/accomodation-type/update-accomodation-type-unsuccessful/update-accomodation-type-unsuccessful.component';
import { UpdateActivityUnsuccessfulComponent } from './modals/activity/update-activity-unsuccessful/update-activity-unsuccessful.component';
import { AddActivityUnsuccessfulComponent } from './modals/activity/add-activity-unsuccessful/add-activity-unsuccessful.component';
import { DeleteActivityUnsuccessfulComponent } from './modals/activity/delete-activity-unsuccessful/delete-activity-unsuccessful.component';
import { DeleteActivityRateUnsuccessfulComponent } from './modals/activity-rate/delete-activity-rate-unsuccessful/delete-activity-rate-unsuccessful.component';
import { UpdateActivityRateUnsuccessfulComponent } from './modals/activity-rate/update-activity-rate-unsuccessful/update-activity-rate-unsuccessful.component';
import { AddActivityRateUnsuccessfulComponent } from './modals/activity-rate/add-activity-rate-unsuccessful/add-activity-rate-unsuccessful.component';
import { AddActivitySlotUnsuccessfulComponent } from './modals/activity-slot/add-activity-slot-unsuccessful/add-activity-slot-unsuccessful.component';
import { UpdateActivitySlotUnsuccessfulComponent } from './modals/activity-slot/update-activity-slot-unsuccessful/update-activity-slot-unsuccessful.component';
import { DeleteActivitySlotUnsuccessfulComponent } from './modals/activity-slot/delete-activity-slot-unsuccessful/delete-activity-slot-unsuccessful.component';
import { DeleteActivityTypeUnsuccessfulComponent } from './modals/activity-type/delete-activity-type-unsuccessful/delete-activity-type-unsuccessful.component';
import { UpdateActivityTypeUnsuccessfulComponent } from './modals/activity-type/update-activity-type-unsuccessful/update-activity-type-unsuccessful.component';
import { AddActivityTypeUnsuccessfulComponent } from './modals/activity-type/add-activity-type-unsuccessful/add-activity-type-unsuccessful.component';
import { AddAmenityUnsuccessfulComponent } from './modals/amenity/add-amenity-unsuccessful/add-amenity-unsuccessful.component';
import { UpdateAmenityUnsuccessfulComponent } from './modals/amenity/update-amenity-unsuccessful/update-amenity-unsuccessful.component';
import { DeleteAmenityUnsuccessfulComponent } from './modals/amenity/delete-amenity-unsuccessful/delete-amenity-unsuccessful.component';
import { DeleteAmenityPenaltyUnsuccessfulComponent } from './modals/amenity-penalty/delete-amenity-penalty-unsuccessful/delete-amenity-penalty-unsuccessful.component';
import { AddAmenityPenaltyUnsuccessfulComponent } from './modals/amenity-penalty/add-amenity-penalty-unsuccessful/add-amenity-penalty-unsuccessful.component';
import { UpdateAmenityPenaltyUnsuccessfulComponent } from './modals/amenity-penalty/update-amenity-penalty-unsuccessful/update-amenity-penalty-unsuccessful.component';
import { AddAmenityTypeUnsuccessfulComponent } from './modals/amenity-type/add-amenity-type-unsuccessful/add-amenity-type-unsuccessful.component';
import { UpdateAmenityTypeUnsuccessfulComponent } from './modals/amenity-type/update-amenity-type-unsuccessful/update-amenity-type-unsuccessful.component';
import { DeleteAmenityTypeUnsuccessfulComponent } from './modals/amenity-type/delete-amenity-type-unsuccessful/delete-amenity-type-unsuccessful.component';
import { DeleteCampUnsuccessfulComponent } from './modals/camp/delete-camp-unsuccessful/delete-camp-unsuccessful.component';
import { UpdateCampUnsuccessfulComponent } from './modals/camp/update-camp-unsuccessful/update-camp-unsuccessful.component';
import { AddCampUnsuccessfulComponent } from './modals/camp/add-camp-unsuccessful/add-camp-unsuccessful.component';
import { AddCampGateTimeUnsuccessfulComponent } from './modals/camp-gate-time/add-camp-gate-time-unsuccessful/add-camp-gate-time-unsuccessful.component';
import { UpdateCampGateTimeUnsuccessfulComponent } from './modals/camp-gate-time/update-camp-gate-time-unsuccessful/update-camp-gate-time-unsuccessful.component';
import { DeleteCampGateTimeUnsuccessfulComponent } from './modals/camp-gate-time/delete-camp-gate-time-unsuccessful/delete-camp-gate-time-unsuccessful.component';
import { DeleteCampTypeUnsuccessfulComponent } from './modals/camp-type/delete-camp-type-unsuccessful/delete-camp-type-unsuccessful.component';
import { UpdateCampTypeUnsuccessfulComponent } from './modals/camp-type/update-camp-type-unsuccessful/update-camp-type-unsuccessful.component';
import { AddCampTypeUnsuccessfulComponent } from './modals/camp-type/add-camp-type-unsuccessful/add-camp-type-unsuccessful.component';
import { AddDailyConservationFeeUnsuccessfulComponent } from './modals/daily-conservation-fee/add-daily-conservation-fee-unsuccessful/add-daily-conservation-fee-unsuccessful.component';
import { UpdateDailyConservationFeeUnsuccessfulComponent } from './modals/daily-conservation-fee/update-daily-conservation-fee-unsuccessful/update-daily-conservation-fee-unsuccessful.component';
import { DeleteDailyConservationFeeUnsuccessfulComponent } from './modals/daily-conservation-fee/delete-daily-conservation-fee-unsuccessful/delete-daily-conservation-fee-unsuccessful.component';
import { UpdateEmployeeUnsuccessfulComponent } from './modals/employee/update-employee-unsuccessful/update-employee-unsuccessful.component';
import { AddEmployeeUnsuccessfulComponent } from './modals/employee/add-employee-unsuccessful/add-employee-unsuccessful.component';
import { AddParkUnsuccessfulComponent } from './modals/park/add-park-unsuccessful/add-park-unsuccessful.component';
import { UpdateParkUnsuccessfulComponent } from './modals/park/update-park-unsuccessful/update-park-unsuccessful.component';
import { DeleteParkUnsuccessfulComponent } from './modals/park/delete-park-unsuccessful/delete-park-unsuccessful.component';
import { DeleteParkGateUnsuccessfulComponent } from './modals/park-gate/delete-park-gate-unsuccessful/delete-park-gate-unsuccessful.component';
import { UpdateParkGateUnsuccessfulComponent } from './modals/park-gate/update-park-gate-unsuccessful/update-park-gate-unsuccessful.component';
import { AddParkGateUnsuccessfulComponent } from './modals/park-gate/add-park-gate-unsuccessful/add-park-gate-unsuccessful.component';
import { AddParkGateTimeUnsuccessfulComponent } from './modals/park-gate-time/add-park-gate-time-unsuccessful/add-park-gate-time-unsuccessful.component';
import { UpdateParkGateTimeUnsuccessfulComponent } from './modals/park-gate-time/update-park-gate-time-unsuccessful/update-park-gate-time-unsuccessful.component';
import { DeleteParkGateTimeUnsuccessfulComponent } from './modals/park-gate-time/delete-park-gate-time-unsuccessful/delete-park-gate-time-unsuccessful.component';
import { DeleteSeasonUnsuccessfulComponent } from './modals/season/delete-season-unsuccessful/delete-season-unsuccessful.component';
import { UpdateSeasonUnsuccessfulComponent } from './modals/season/update-season-unsuccessful/update-season-unsuccessful.component';
import { AddSeasonUnsuccessfulComponent } from './modals/season/add-season-unsuccessful/add-season-unsuccessful.component';
import { AddUserRoleUnsuccessfulComponent } from './modals/user-role/add-user-role-unsuccessful/add-user-role-unsuccessful.component';
import { UpdateUserRoleUnsuccessfulComponent } from './modals/user-role/update-user-role-unsuccessful/update-user-role-unsuccessful.component';
import { DeleteUserRoleUnsuccessfulComponent } from './modals/user-role/delete-user-role-unsuccessful/delete-user-role-unsuccessful.component';
import { DeleteWildcardCategoryUnsuccessfulComponent } from './modals/wildcard-category/delete-wildcard-category-unsuccessful/delete-wildcard-category-unsuccessful.component';
import { UpdateWildcardCategoryUnsuccessfulComponent } from './modals/wildcard-category/update-wildcard-category-unsuccessful/update-wildcard-category-unsuccessful.component';
import { AddWildcardCategoryUnsuccessfulComponent } from './modals/wildcard-category/add-wildcard-category-unsuccessful/add-wildcard-category-unsuccessful.component';
import { AddWildcardClusterUnsuccessfulComponent } from './modals/wildcard-cluster/add-wildcard-cluster-unsuccessful/add-wildcard-cluster-unsuccessful.component';
import { UpdateWildcardClusterUnsuccessfulComponent } from './modals/wildcard-cluster/update-wildcard-cluster-unsuccessful/update-wildcard-cluster-unsuccessful.component';
import { DeleteWildcardClusterUnsuccessfulComponent } from './modals/wildcard-cluster/delete-wildcard-cluster-unsuccessful/delete-wildcard-cluster-unsuccessful.component';
import { DeleteWildcardRateUnsuccessfulComponent } from './modals/wildcard-rate/delete-wildcard-rate-unsuccessful/delete-wildcard-rate-unsuccessful.component';
import { UpdateWildcardRateUnsuccessfulComponent } from './modals/wildcard-rate/update-wildcard-rate-unsuccessful/update-wildcard-rate-unsuccessful.component';
import { AddWildcardRateUnsuccessfulComponent } from './modals/wildcard-rate/add-wildcard-rate-unsuccessful/add-wildcard-rate-unsuccessful.component';
import { CheckInParkComponent } from './pages/check-in-park/check-in-park.component';
import { ParkGateCountComponent } from './subcomponents/park-gate-count/park-gate-count.component';
import { UnannouncedCheckInComponent } from './pages/unannounced-check-in/unannounced-check-in.component';
import { PreBookedCheckInComponent } from './pages/pre-booked-check-in/pre-booked-check-in.component';
import { SuccessModalComponent } from './modals/auxilliary-modals/success-modal/success-modal.component';
import { CheckoutParkComponent } from './pages/checkout-park/checkout-park.component';
import { NgxStripeModule } from 'ngx-stripe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepper} from '@angular/material/stepper';
import { CheckoutListComponent } from './pages/checkout-list/checkout-list.component';
import { ChecInAccommodationComponent } from './pages/chec-in-accommodation/chec-in-accommodation.component';
import { AssignAccComponent } from './pages/assign-acc/assign-acc.component';
import {ChartModule} from 'angular2-chartjs';
import { ConfirmModalComponent } from './modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { CheckInActivityComponent } from './pages/check-in-activity/check-in-activity.component';
import { AddEquipmentComponent } from './modals/add-equipment/add-equipment.component';
import { SearchBookingsComponent } from './pages/search-bookings/search-bookings.component';
import { PayOptionComponent } from './pages/pay-option/pay-option.component';
import { CashPaymentComponent } from './pages/cash-payment/cash-payment.component';
import { CardOptionComponent } from './pages/card-option/card-option.component';
import { environment } from 'src/environments/environment';
import { AvailabilityComponent } from './pages/availability/availability.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AssignAccommodationComponent } from './modals/auxilliary-modals/assign-accommodation/assign-accommodation.component';
import { CheckoutCampComponent } from './pages/checkout-camp/checkout-camp.component';
import { UnassignAccComponent } from './unassign-acc/unassign-acc.component';
import { ParkPerformanceComponent } from './pages/reports/park-performance/park-performance.component';
import { WeeklyBookingComponent } from './pages/reports/weekly-booking/weekly-booking.component';
import { WildcardReportComponent } from './pages/reports/wildcard-report/wildcard-report.component';
import { BookingCheckinComponent } from './pages/reports/booking-checkin/booking-checkin.component';
import { ClientComponent } from './pages/client/client.component';
import { AddClientComponent } from './modals/client/add-client/add-client.component';
import { AddClientConfirmationComponent } from './modals/client/add-client-confirmation/add-client-confirmation.component';
import { AddClientSuccessfulComponent } from './modals/client/add-client-successful/add-client-successful.component';
import { AddClientUnsuccesfulComponent } from './modals/client/add-client-unsuccesful/add-client-unsuccesful.component';
import { ViewClientComponent } from './modals/client/view-client/view-client.component';
import { UpdateClientComponent } from './modals/client/update-client/update-client.component';
import { UpdateClientConfirmationComponent } from './modals/client/update-client-confirmation/update-client-confirmation.component';
import { UpdateClientSuccessfulComponent } from './modals/client/update-client-successful/update-client-successful.component';
import { UpdateClientUnsuccessfulComponent } from './modals/client/update-client-unsuccessful/update-client-unsuccessful.component';
import { PurchaseWildcardConfirmationComponent } from './pages/Purchase Wildcard/purchase-wildcard-confirmation/purchase-wildcard-confirmation.component';
import { SuccessfulWildcardPurchaseComponent } from './pages/Purchase Wildcard/successful-wildcard-purchase/successful-wildcard-purchase.component';
import { SearchWildcardMembershipComponent } from './pages/renew/search-wildcard-membership/search-wildcard-membership.component';
import { RenewWildcardMembershipComponent } from './pages/renew/renew-wildcard-membership/renew-wildcard-membership.component';
import { UpdateWildcardStatusConfirmationComponent } from './pages/renew/update-wildcard-status-confirmation/update-wildcard-status-confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './subcomponents/login/login/login.component';
import { LoginFailedComponent } from './subcomponents/login/login-failed/login-failed.component';
import { ForgotPasswordComponent } from './subcomponents/login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './subcomponents/login/reset-password/reset-password.component';
import { PageNotFoundComponent } from './subcomponents/page-not-found/page-not-found.component';
import { UserNotFoundComponent } from './subcomponents/login/user-not-found/user-not-found.component';
import { ForgotPasswordUnsucessfulComponent } from './subcomponents/login/forgot-password-unsucessful/forgot-password-unsucessful.component';
import { ForgotPasswordSuccessfulComponent } from './subcomponents/login/forgot-password-successful/forgot-password-successful.component';
import { ResetPasswordSucessfulComponent } from './subcomponents/login/reset-password-sucessful/reset-password-sucessful.component';
import { ResetPasswordUnsuccessfulComponent } from './subcomponents/login/reset-password-unsuccessful/reset-password-unsuccessful.component';
import { RouterModule } from '@angular/router';
import { ViewProfileComponent } from './modals/employee/view-profile/view-profile.component';
import { UpdateProfileComponent } from './modals/employee/update-profile/update-profile.component';
import { SuccessfulProfileUpdateComponent } from './modals/employee/successful-profile-update/successful-profile-update.component';
import { UnsuccessfulProfileUpdateComponent } from './modals/employee/unsuccessful-profile-update/unsuccessful-profile-update.component';
import { ProfileUpdateConfirmationComponent } from './modals/employee/profile-update-confirmation/profile-update-confirmation.component';
import { ActiveDatesComponent } from 'src/app/modals/settings/active-dates/active-dates.component';
import { UserTimeOutComponent } from 'src/app/modals/settings/user-time-out/user-time-out.component';
import { ErrorModalComponent } from './modals/auxilliary-modals/error-modal/error-modal.component';
import { AddAccommodationBookingComponent } from './modals/booking/add-accommodation-booking/add-accommodation-booking.component';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddActivityBookingComponent } from './modals/booking/add-activity-booking/add-activity-booking.component';
import { AddDayvisitComponent } from './modals/booking/add-dayvisit/add-dayvisit.component';
import { AddAdultGuestComponent } from './modals/guest/add-adult-guest/add-adult-guest.component';
import { AddChildGuestComponent } from './modals/guest/add-child-guest/add-child-guest.component';
import { AddArbitraryGuestComponent } from './modals/guest/add-arbitrary-guest/add-arbitrary-guest.component';
import { ViewAccommodationModalComponent } from './modals/booking/view-accommodation-modal/view-accommodation-modal.component';
import { HelpComponent } from './subcomponents/help/help.component';
import { SearchClientForWCComponent } from './pages/Purchase Wildcard/search-client-for-wc/search-client-for-wc.component';;
import { PurchaseWildcardComponent } from './modals/purchase-wildcard/purchase-wildcard.component';
import { UnsuccessfulWCPurchaseComponent } from './pages/Purchase Wildcard/unsuccessful-wcpurchase/unsuccessful-wcpurchase.component';
import { ItineraryComponent } from './pages/itinerary/itinerary.component';
import { RefundReportComponent } from './pages/reports/refund-report/refund-report.component';
import { PaymentReportComponent } from './pages/reports/payment-report/payment-report.component';
import { DashBoardHomeComponent } from './subcomponents/dash-board-home/dash-board-home.component';
import { ParkaddedComponent } from './workflows/parkadded/parkadded.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ParkgateaddedComponent } from './workflows/parkgateadded/parkgateadded.component';
import { SeasonaddedComponent } from './workflows/seasonadded/seasonadded.component';
import { CamptypeaddedComponent } from './workflows/camptypeadded/camptypeadded.component';
import { CampaddedComponent } from './workflows/campadded/campadded.component';
import { AccommodationtypeaddedComponent } from './workflows/accommodationtypeadded/accommodationtypeadded.component';
import { AccommodationaddedComponent } from './workflows/accommodationadded/accommodationadded.component';
import { AmenitytypeaddedComponent } from './workflows/amenitytypeadded/amenitytypeadded.component';
import { AmenityAddedComponent } from './workflows/amenity-added/amenity-added.component';
import { ActivityTypeAddedComponent } from './workflows/activity-type-added/activity-type-added.component';
import { ActivityAddedComponent } from './workflows/activity-added/activity-added.component';
import { WildcardClusterAddedComponent } from './workflows/wildcard-cluster-added/wildcard-cluster-added.component';
import { WildcardCategoryAddedComponent } from './workflows/wildcard-category-added/wildcard-category-added.component';
import { UserRoleAddComponent } from './workflows/user-role-add/user-role-add.component';
import { SpinnerComponent } from './subcomponents/spinner/spinner.component';
import { PayOptionModalComponent } from './modals/auxilliary-modals/pay-option-modal/pay-option-modal.component';
import { ForbiddenComponent } from './subcomponents/forbidden/forbidden.component';
import { UpdateArbitraryGuestComponent } from './modals/guest/update-arbitrary-guest/update-arbitrary-guest.component';
import { UpdateAdultGuestComponent } from './modals/guest/update-adult-guest/update-adult-guest.component';
import { UpdateChildGuestComponent } from './modals/guest/update-child-guest/update-child-guest.component';
import { PayConservationFeeComponent } from './pages/pay-conservation-fee/pay-conservation-fee.component';
import { PayUnannouncedConservationComponent } from './pages/pay-unannounced-conservation/pay-unannounced-conservation.component';
import { QrCodeModalComponent } from './modals/qr-code-modal/qr-code-modal.component';
import { QRCodeModule } from 'angularx-qrcode';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin,
  bootstrapPlugin
]);

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    ViewActivityRateComponent,
    UserRoleComponent,
    AddUserRoleComponent,
    AddUserRoleConfirmationComponent,
    UpdateUserRoleConfirmationComponent,
    UpdateUserRoleComponent,
    ViewUserRoleComponent,
    DeleteUserRoleComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    AddEmployeeConfirmationComponent,
    UpdateEmployeeConfirmationComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
    CancelAlertComponent,
    AddAccomodationSuccessfulComponent,
    UpdateAccomodationSuccessfulComponent,
    DeleteAccomodationSuccessfulComponent,
    DeleteAccomodationAddRateSuccessfulComponent,
    UpdateAccomodationAddRateSuccessfulComponent,
    AddAccomodationAddRateSuccessfulComponent,
    AddAccomodationBaseRateSuccessfulComponent,
    UpdateAccomodationBaseRateSuccessfulComponent,
    DeleteAccomodationBaseRateSuccessfulComponent,
    AddAccomodationTypeSuccessfulComponent,
    UpdateAccomodationTypeSuccessfulComponent,
    DeleteAccomodationTypeSuccessfulComponent,
    DeleteActivitySuccessfulComponent,
    UpdateActivitySuccessfulComponent,
    AddActivitySuccessfulComponent,
    UpdateActivityRateSuccessfulComponent,
    DeleteActivityRateSuccessfulComponent,
    DeleteActivitySlotSuccessfulComponent,
    UpdateActivitySlotSuccessfulComponent,
    AddActivitySlotSuccessfulComponent,
    UpdateActivityTypeSuccessfulComponent,
    AddActivityTypeSuccessfulComponent,
    DeleteActivityTypeSuccessfulComponent,
    DeleteAmenitySuccessfulComponent,
    AddAmenitySuccessfulComponent,
    UpdateAmenitySuccessfulComponent,
    AddAmenityPenaltySuccessfulComponent,
    DeleteAmenityPenaltySuccessfulComponent,
    UpdateAmenityPenaltySuccessfulComponent,
    AddAmenityTypeSuccessfulComponent,
    DeleteAmenityTypeSuccessfulComponent,
    UpdateAmenityTypeSuccessfulComponent,
    AddActivityRateSuccessfulComponent,
    UpdateCampSuccessfulComponent,
    AddCampSuccessfulComponent,
    DeleteCampSuccessfulComponent,
    DeleteCampGateTimeSuccessfulComponent,
    AddCampGateTimeSuccessfulComponent,
    UpdateCampGateTimeSuccessfulComponent,
    UpdateCampTypeSuccessfulComponent,
    AddCampTypeSuccessfulComponent,
    DeleteCampTypeSuccessfulComponent,
    DeleteDailyConservationFeeSuccessfulComponent,
    AddDailyConservationFeeSuccessfulComponent,
    UpdateDailyConservationFeeSuccessfulComponent,
    UpdateEmployeeSuccessfulComponent,
    AddEmployeeSuccessfulComponent,
    AddParkSuccessfulComponent,
    DeleteParkSuccessfulComponent,
    UpdateParkSuccessfulComponent,
    AddParkGateSuccessfulComponent,
    DeleteParkGateSuccessfulComponent,
    UpdateParkGateSuccessfulComponent,
    AddParkGateTimeSuccessfulComponent,
    UpdateParkGateTimeSuccessfulComponent,
    DelteParkGateTimeSuccessfulComponent,
    DelteSeasonSuccessfulComponent,
    AddSeasonSuccessfulComponent,
    UpdateSeasonSuccessfulComponent,
    UpdateUserRoleSuccessfulComponent,
    AddUserRoleSuccessfulComponent,
    DeleteUserRoleSuccessfulComponent,
    DeleteWildcardCategorySuccessfulComponent,
    AddWildcardCategorySuccessfulComponent,
    UpdateWildcardCategorySuccessfulComponent,
    UpdateWildcardClusterSuccessfulComponent,
    AddWildcardClusterSuccessfulComponent,
    DeleteWildcardClusterSuccessfulComponent,
    DeleteWildcardRateSuccessfulComponent,
    AddWildcardRateSuccessfulComponent,
    UpdateWildcardRateSuccessfulComponent,
    AddAccomodationUnsuccessfulComponent,
    UpdateAccomodationUnsuccessfulComponent,
    DeleteAccomodationUnsuccessfulComponent,
    AddAccomodationAddRateUnsuccessfulComponent,
    UpdateAccomodationAddRateUnsuccessfulComponent,
    DeleteAccomodationAddRateUnsuccessfulComponent,
    AddAccomodationBaseRateUnsuccessfulComponent,
    UpdateAccomodationBaseRateUnsuccessfulComponent,
    DeleteAccomodationBaseRateUnsuccessfulComponent,
    DeleteAccomodationTypeUnsuccessfulComponent,
    AddAccomodationTypeUnsuccessfulComponent,
    UpdateAccomodationTypeUnsuccessfulComponent,
    UpdateActivityUnsuccessfulComponent,
    AddActivityUnsuccessfulComponent,
    DeleteActivityUnsuccessfulComponent,
    DeleteActivityRateUnsuccessfulComponent,
    UpdateActivityRateUnsuccessfulComponent,
    AddActivityRateUnsuccessfulComponent,
    AddActivitySlotUnsuccessfulComponent,
    UpdateActivitySlotUnsuccessfulComponent,
    DeleteActivitySlotUnsuccessfulComponent,
    DeleteActivityTypeUnsuccessfulComponent,
    UpdateActivityTypeUnsuccessfulComponent,
    AddActivityTypeUnsuccessfulComponent,
    AddAmenityUnsuccessfulComponent,
    UpdateAmenityUnsuccessfulComponent,
    DeleteAmenityUnsuccessfulComponent,
    DeleteAmenityPenaltyUnsuccessfulComponent,
    AddAmenityPenaltyUnsuccessfulComponent,
    UpdateAmenityPenaltyUnsuccessfulComponent,
    AddAmenityTypeUnsuccessfulComponent,
    UpdateAmenityTypeUnsuccessfulComponent,
    DeleteAmenityTypeUnsuccessfulComponent,
    DeleteCampUnsuccessfulComponent,
    UpdateCampUnsuccessfulComponent,
    AddCampUnsuccessfulComponent,
    AddCampGateTimeUnsuccessfulComponent,
    UpdateCampGateTimeUnsuccessfulComponent,
    DeleteCampGateTimeUnsuccessfulComponent,
    DeleteCampTypeUnsuccessfulComponent,
    UpdateCampTypeUnsuccessfulComponent,
    AddCampTypeUnsuccessfulComponent,
    AddDailyConservationFeeUnsuccessfulComponent,
    UpdateDailyConservationFeeUnsuccessfulComponent,
    DeleteDailyConservationFeeUnsuccessfulComponent,
    UpdateEmployeeUnsuccessfulComponent,
    AddEmployeeUnsuccessfulComponent,
    AddParkUnsuccessfulComponent,
    UpdateParkUnsuccessfulComponent,
    DeleteParkUnsuccessfulComponent,
    DeleteParkGateUnsuccessfulComponent,
    UpdateParkGateUnsuccessfulComponent,
    AddParkGateUnsuccessfulComponent,
    AddParkGateTimeUnsuccessfulComponent,
    UpdateParkGateTimeUnsuccessfulComponent,
    DeleteParkGateTimeUnsuccessfulComponent,
    DeleteSeasonUnsuccessfulComponent,
    UpdateSeasonUnsuccessfulComponent,
    AddSeasonUnsuccessfulComponent,
    AddUserRoleUnsuccessfulComponent,
    UpdateUserRoleUnsuccessfulComponent,
    DeleteUserRoleUnsuccessfulComponent,
    DeleteWildcardCategoryUnsuccessfulComponent,
    UpdateWildcardCategoryUnsuccessfulComponent,
    AddWildcardCategoryUnsuccessfulComponent,
    AddWildcardClusterUnsuccessfulComponent,
    UpdateWildcardClusterUnsuccessfulComponent,
    DeleteWildcardClusterUnsuccessfulComponent,
    DeleteWildcardRateUnsuccessfulComponent,
    UpdateWildcardRateUnsuccessfulComponent,
    AddWildcardRateUnsuccessfulComponent,
    CheckInParkComponent,
    ParkGateCountComponent,
    UnannouncedCheckInComponent,
    PreBookedCheckInComponent,
    SuccessModalComponent,
    CheckoutParkComponent,
    CheckoutListComponent,
    ChecInAccommodationComponent,
    AssignAccComponent,
    ConfirmModalComponent,
    CheckInActivityComponent,
    AddEquipmentComponent,
    SearchBookingsComponent,
    PayOptionComponent,
    CashPaymentComponent,
    CardOptionComponent,
    AvailabilityComponent,
    AssignAccommodationComponent,
    CheckoutCampComponent,
    UnassignAccComponent,
    ParkPerformanceComponent,
    WeeklyBookingComponent,
    WildcardReportComponent,
    BookingCheckinComponent,
    ClientComponent,
    AddClientComponent,
    AddClientConfirmationComponent,
    AddClientSuccessfulComponent,
    AddClientUnsuccesfulComponent,
    ViewClientComponent,
    UpdateClientComponent,
    UpdateClientConfirmationComponent,
    UpdateClientSuccessfulComponent,
    UpdateClientUnsuccessfulComponent,
    PurchaseWildcardConfirmationComponent,
    SuccessfulWildcardPurchaseComponent,
    SearchWildcardMembershipComponent,
    RenewWildcardMembershipComponent,
    UpdateWildcardStatusConfirmationComponent,
    LoginComponent,
    LoginFailedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PageNotFoundComponent,
    UserNotFoundComponent,
    ForgotPasswordUnsucessfulComponent,
    ForgotPasswordSuccessfulComponent,
    ResetPasswordSucessfulComponent,
    ResetPasswordUnsuccessfulComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    SuccessfulProfileUpdateComponent,
    UnsuccessfulProfileUpdateComponent,
    ProfileUpdateConfirmationComponent,
    ActiveDatesComponent,
    UserTimeOutComponent,
    ErrorModalComponent,
    AddAccommodationBookingComponent,
    AddActivityBookingComponent,
    AddDayvisitComponent,
    AddAdultGuestComponent,
    AddChildGuestComponent,
    AddArbitraryGuestComponent,
    ViewAccommodationModalComponent,
    HelpComponent,
    SearchClientForWCComponent,
    PurchaseWildcardComponent,
    UnsuccessfulWCPurchaseComponent,
    ItineraryComponent,
    RefundReportComponent,
    PaymentReportComponent,
    DashBoardHomeComponent,
    ParkaddedComponent,
    ParkgateaddedComponent,
    SeasonaddedComponent,
    CamptypeaddedComponent,
    CampaddedComponent,
    AccommodationtypeaddedComponent,
    AccommodationaddedComponent,
    AmenitytypeaddedComponent,
    AmenityAddedComponent,
    ActivityTypeAddedComponent,
    ActivityAddedComponent,
    WildcardClusterAddedComponent,
    WildcardCategoryAddedComponent,
    UserRoleAddComponent,
    SpinnerComponent,
    PayOptionModalComponent,
    ForbiddenComponent,
    UpdateArbitraryGuestComponent,
    UpdateAdultGuestComponent,
    UpdateChildGuestComponent,
    PayConservationFeeComponent,
    PayUnannouncedConservationComponent,
    QrCodeModalComponent
  ],
  entryComponents: [
    AddParkComponent,
    UpdateParkComponent,
    DeleteParkComponent,
    AddParkGateComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    TableModule,
    PaginatorModule,
    NgxStripeModule.forRoot(environment.stripeKey),
    MatSnackBarModule,
    MatBottomSheetModule,
    ChartModule,
    SimplebarAngularModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
    QRCodeModule,
    HttpClientModule,
    RouterModule.forRoot([
      { // Perhaps we should have an actual home component
        path: 'Login',
        component: LoginComponent
      },
      {path: '', redirectTo: '/Login', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [MatSnackBarModule, MatStepper, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
