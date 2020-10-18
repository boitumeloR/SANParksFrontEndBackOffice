import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkComponent } from './pages/park/park.component';
import { AddParkComponent } from './modals/park/add-park/add-park.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { AccomodationTypeComponent } from './pages/accomodation-type/accomodation-type.component';
import {ParkGateComponent} from './pages/park-gate/park-gate.component';
import { ParkGateTimeComponent } from './pages/park-gate-time/park-gate-time.component';
import {DailyConservationFeeComponent} from './pages/daily-conservation-fee/daily-conservation-fee.component';
import {SeasonComponent} from 'src/app/pages/season/season.component';
import { CampTypeComponent } from './pages/camp-type/camp-type.component';
import {CampComponent} from './pages/camp/camp.component';
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
import { CheckInParkComponent } from './pages/check-in-park/check-in-park.component';
import { UnannouncedCheckInComponent } from './pages/unannounced-check-in/unannounced-check-in.component';
import { PreBookedCheckInComponent } from './pages/pre-booked-check-in/pre-booked-check-in.component';
import { CheckoutParkComponent } from './pages/checkout-park/checkout-park.component';
import { CheckoutListComponent } from './pages/checkout-list/checkout-list.component';
import { ChecInAccommodationComponent } from './pages/chec-in-accommodation/chec-in-accommodation.component';
import { AssignAccComponent } from './pages/assign-acc/assign-acc.component';
import { CheckInActivityComponent } from './pages/check-in-activity/check-in-activity.component';
import { SearchBookingsComponent } from './pages/search-bookings/search-bookings.component';
import { PayOptionComponent } from './pages/pay-option/pay-option.component';
import { CardOptionComponent } from './pages/card-option/card-option.component';
import { AvailabilityComponent } from './pages/availability/availability.component';
import { CheckoutCampComponent } from './pages/checkout-camp/checkout-camp.component';
import { UnassignAccComponent } from './unassign-acc/unassign-acc.component';
import { ParkPerformanceComponent } from './pages/reports/park-performance/park-performance.component';
import { WeeklyBookingComponent } from './pages/reports/weekly-booking/weekly-booking.component';
import { WildcardReportComponent } from './pages/reports/wildcard-report/wildcard-report.component';
import { BookingCheckinComponent } from './pages/reports/booking-checkin/booking-checkin.component';
import {ClientComponent} from './pages/client/client.component';
import {SearchClientForWCComponent} from './pages/Purchase Wildcard/search-client-for-wc/search-client-for-wc.component';
import {SearchWildcardMembershipComponent} from './pages/renew/search-wildcard-membership/search-wildcard-membership.component';
import { ForgotPasswordComponent } from './subcomponents/login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './subcomponents/login/reset-password/reset-password.component';
import { ActiveDatesComponent } from './modals/settings/active-dates/active-dates.component';
import { UserTimeOutComponent } from './modals/settings/user-time-out/user-time-out.component';
import { ItineraryComponent } from './pages/itinerary/itinerary.component';
import { RefundReportComponent } from './pages/reports/refund-report/refund-report.component';
import { PaymentReportComponent } from './pages/reports/payment-report/payment-report.component';
import { DashBoardHomeComponent } from './subcomponents/dash-board-home/dash-board-home.component';
import { ForbiddenComponent } from './subcomponents/forbidden/forbidden.component';
import { AuthguardGuard } from './subcomponents/authguard.guard';
const routes: Routes = [
  {
    path: 'Park',
    component: ParkComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Home',
    component: DashBoardHomeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 'home'}
  },
  {
    path: 'Active-Dates',
    component: ActiveDatesComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Session-Timer',
    component: UserTimeOutComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Park-Gate',
    component: ParkGateComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Park-Gate-Time',
    component: ParkGateTimeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Daily-Conservation-Fee',
    component: DailyConservationFeeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Season',
    component: SeasonComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Camp-Type',
    component: CampTypeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Camp',
    component: CampComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Camp-Gate-Time',
    component: CampGateTimeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Wildcard-Cluster',
    component: WildcardClusterComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Wildcard-Category',
    component: WildcardCategoryComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Wildcard-Rate',
    component: WildcardRateComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Forgot-Password',
    component: ForgotPasswordComponent
  },
  {
    path: 'Reset-Password',
    component: ResetPasswordComponent
  },
  {
    path: 'addPark',
    component: AddParkComponent
  },
  {
    path: 'Activity',
    component: ActivityComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Activity-Type',
    component: ActivityTypeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Activity-Slot',
    component: ActivitySlotComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Accomodation',
    component: AccomodationComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Accomodation-Type',
    component: AccomodationTypeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Accomodation-Base-Rate',
    component: AccomodationBaseRateComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Accomodation-Add-Rate',
    component: AccomodationAddRateComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Amenity-Type',
    component: AmenityTypeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Amenity',
    component: AmenityComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Amenity-Penalty',
    component: AmenityPenaltyComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Activity-Rate',
    component: ActivityRateComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'User-Role',
    component: UserRoleComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'Employee',
    component: EmployeeComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 3}
  },
  {
    path: 'checkInPark',
    component: CheckInParkComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 5}
  },
  {
    path: 'unannouncedCheckIn',
    component: UnannouncedCheckInComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 5}
  },
  {
    path: 'preBookedCheckIn',
    component: PreBookedCheckInComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 5}
  },
  {
    path: 'checkOutPark',
    component: CheckoutParkComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 6}
  },
  {
    path: 'checkOutList',
    component: CheckoutListComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 6}
  },
  {
    path: 'checkInAccommodation',
    component: ChecInAccommodationComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 6}
  },
  {
    path: 'assignAccommodation',
    component: AssignAccComponent
  },
  {
    path: 'checkInActivity',
    component: CheckInActivityComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 6}
  },
  {
    path: 'searchBookings',
    component: SearchBookingsComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 2}
  },
  {
    path: 'payOption',
    component: PayOptionComponent
  },
  {
    path: 'cardOption',
    component: CardOptionComponent
  },
  {
    path: 'availableResults',
    component: AvailabilityComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 2}
  },
  {
    path: 'checkoutCamp',
    component: CheckoutCampComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 6}
  },
  {
    path: 'unassignAcc',
    component: UnassignAccComponent
  },
  {
    path: 'parkPerform',
    component: ParkPerformanceComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 'reporting'}
  },
  {
    path: 'weeklyBooking',
    component: WeeklyBookingComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 'reporting'}
  },
  {
    path: 'wildcardMembership',
    component: WildcardReportComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 'reporting'}
  },
  {
    path: 'bookingCheckin',
    component: BookingCheckinComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 'reporting'}
  },
  {
    path: 'Client',
    component: ClientComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 2}
  },
  {
    path: 'Purhase-Wildcard',
    component: SearchClientForWCComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 2}
  },
  {
    path: 'Search-Wildcard-Membership',
    component: SearchWildcardMembershipComponent,
    canActivate: [AuthguardGuard],
    data: { roleID: 2}
  },
  {
    path: 'Forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'itinerary',
    component: ItineraryComponent
  },
  {
    path: 'refundReport',
    component: RefundReportComponent
  },
  {
    path: 'paymentReport',
    component: PaymentReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
