import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg, disableCursor } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { ViewAccomodationComponent } from 'src/app/modals/accomodation/view-accomodation/view-accomodation.component';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { AddAccommodationBookingComponent } from 'src/app/modals/booking/add-accommodation-booking/add-accommodation-booking.component';
import { AddActivityBookingComponent } from 'src/app/modals/booking/add-activity-booking/add-activity-booking.component';
import { AddDayvisitComponent } from 'src/app/modals/booking/add-dayvisit/add-dayvisit.component';
import { ViewAccommodationModalComponent } from 'src/app/modals/booking/view-accommodation-modal/view-accommodation-modal.component';
import { TableDate, AvailabilityService } from 'src/app/services/Available/availability.service';
import { Booking } from 'src/app/services/Booking/booking.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {


  availableGroup: FormGroup;
  isAccommodation: boolean;
  isActivity: boolean;

  panelOpenState = false;

  notFound = false;
  // Observables
  dropDowns$: Observable<any>;
  parkDrop$: Observable<any>;
  activityDrop$: Observable<any>;
  accommodationDrop$: Observable<any>;
  dayDrop$: Observable<any>;
  checkAvailability$: Observable<any>;

  // Errors
  httpError = false;
  httpMessage = '';
  // Dropdown content
  parks: any[];
  camps: any[];
  activityTypes: any[];
  accommodationTypes: any[];

  checks = 0;
  tableDates: TableDate[];
  availableResults: any[];
  apiData: any;
  searchData: any;
  parkName: string;
  datePicked: Date;
  startDate = new Date();
  placeDate = new Date();
  boundaryDate: Date = new Date(this.placeDate.setMonth(this.placeDate.getMonth() + 11));
  head = 'head';
  loader = false;
  mapLoader = false;
  isOpen = true;
  constructor(private router: Router, private serv: AvailabilityService,
              private global: GlobalService, private snack: MatSnackBar,
              private dialog: MatDialog, private formBuilder: FormBuilder, private title: Title) { }

  ngOnInit(): void {
    this.notFound = false;
    this.title.setTitle('Availability');
    // this.apiData = JSON.parse(localStorage.getItem('availableResults'));
    // this.availableResults = this.apiData.AvailableResults;

    // console.log(this.availableResults);
    // if (this.availableResults.length === 0) {
    //   this.notFound = true;
    //   this.snack.open(`Nothing was available from your search, try other parameters.`, 'OK', {
    //     horizontalPosition: 'center',
    //     verticalPosition: 'bottom',
    //     duration: 10000
    //   }).afterDismissed().subscribe(() => {
    //     this.loader = false;
    //   });
    // }
    // else {
    //   this.notFound = false;
    // }
    console.log(this.availableResults);

    const availableData = {
      ParkID: null ,
      CampID: null,
      AccommodationChecked: false,
      ActivityChecked: false,
      DayVisitChecked: false,
      AccommodationTypeID: null,
      ActivityTypeID: null,
      Forward: true,
      BaseDate: new Date()
    };

    this.searchData = availableData;
    // populate dropdown park
    this.dropDowns$ = this.serv.getDropDowns(this.global.GetServer());
    this.dropDowns$.subscribe(res => {
      console.log(res);
      this.parks = res.Parks;
      this.isAccommodation = false;
      this.isActivity = false;
    }, (error: HttpErrorResponse) => {
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });

    // initialise form
    this.isAccommodation = true;
    this.isActivity = true;
    console.log(this.isAccommodation, this.isActivity);
    this.availableGroup = this.formBuilder.group({
      park: [null, Validators.required],
      camp: [null],
      activity: [false],
      accommodation: [false],
      day: [false],
      activityType: [null],
      accommodationType: [null]
    });
  }


  // Choosing parks and booking types

  onChoosePark() {
    if (this.availableGroup.get('park').valid) {
      this.parkDrop$ = this.serv.getCamps(this.availableGroup.get('park').value, this.global.GetServer());
      this.parkDrop$.subscribe(res =>  {
        this.camps = res;
        console.log(res);
      }, (error: HttpErrorResponse) => {
        this.dialog.open(ErrorModalComponent, {
          data: { errorMessage: error.message }
        });
      });
    }
    else {
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: 'Choose a park from the dropdown' }
      });
    }
  }

  onChooseCamp() {
    // Assign camp
  }

  onChooseAct() {
    if (this.availableGroup.valid) {
      if (this.availableGroup.get('activity').value === true) {
        const values = {
          parkID: this.availableGroup.get('park').value,
          campID: this.availableGroup.get('camp').value
        };
        console.log(values);
        this.activityDrop$ = this.serv.getActivityTypes(values, this.global.GetServer());
        this.activityDrop$.subscribe(res => {
          this.activityTypes = res;
          this.checks++;
        }, (error: HttpErrorResponse) => {
          this.dialog.open(ErrorModalComponent, {
            data: { errorMessage: error.message }
          });
        });
      }
    } else {
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: 'Make Sure to choose a park before submiting' }
      });
    }
  }

  onChooseAcc() {
    if (this.availableGroup.valid) {
      if (this.availableGroup.get('accommodation').value === true) {
        const values = {
          parkID: this.availableGroup.get('park').value,
          campID: this.availableGroup.get('camp').value
        };

        this.activityDrop$ = this.serv.getAccommodationTypes(values, this.global.GetServer());
        this.activityDrop$.subscribe(res => {
          this.accommodationTypes = res;
          this.checks++;
        }, (error: HttpErrorResponse) => {
          this.dialog.open(ErrorModalComponent, {
            data: { errorMessage: error.message }
          });
        });
      }
    } else {
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: 'Make Sure to choose a park before submiting' }
      });
    }
  }

  CheckAvailability() {
    if (this.availableGroup.valid) {
        this.loader = true;
        const availableData = {
          ParkID: Number(this.availableGroup.get('park').value) ,
          CampID: this.availableGroup.get('camp').value,
          AccommodationChecked: this.availableGroup.get('accommodation').value,
          ActivityChecked: this.availableGroup.get('activity').value,
          DayVisitChecked: this.availableGroup.get('day').value,
          AccommodationTypeID: this.availableGroup.get('accommodationType').value,
          ActivityTypeID: this.availableGroup.get('activityType').value,
          Forward: true,
          BaseDate: new Date()
        };

        console.log(availableData);

        this.checkAvailability$ = this.serv.checkAvailability(availableData, this.global.GetServer());
        this.checkAvailability$.subscribe(res => {
          this.parkName = res.ParkName;
          this.loader = false;
          this.searchData = availableData;
          this.apiData = res;
          this.tableDates = res.Dates;
          this.availableResults = res.AvailableResults;
          console.log(res);
          if (this.availableResults.length === 0) {
            this.notFound = true;
          }
          else {
            this.notFound = false;
          }
          localStorage.setItem('availableResults', JSON.stringify(res));
          this.searchData = availableData;
        }, (error: HttpErrorResponse) => {
          this.dialog.open(ErrorModalComponent, {
            data: { errorMessage: error.message }
          });
        });
    }
    // this.router.navigateByUrl('availableResults');
  }

  onChooseDay() {
    if (this.availableGroup.valid) {
      this.checks++;
    }
    else {
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: 'Make Sure to choose a park before submiting' }
      });
    }
  }

  chooseDate(event: Event) {
    this.searchData.BaseDate = event;
    this.searchData.Forward = true;
    this.loader = true;

    this.checkAvailability$ = this.serv.checkAvailability(this.searchData, this.global.GetServer());
    this.checkAvailability$.subscribe(res => {
      this.panelOpenState = true;
      this.availableResults = res.AvailableResults;
      this.parkName = res.ParkName;
      this.tableDates = res.Dates;
      this.loader = false;
      this.isOpen = true;
      localStorage.setItem('availableResults', JSON.stringify(res));
      localStorage.setItem('searchData', JSON.stringify(this.searchData));
    }, (error: HttpErrorResponse) => {
      this.snack.open(`An error occured on our servers: ${error.message}`, 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      }).afterDismissed().subscribe(() => {
        this.loader = false;
      });
      this.httpError = true;
      this.httpMessage = error.message;
    });
  }

  nextWeek() {
    this.loader = true;
    this.searchData.Forward = true;
    this.searchData.BaseDate = this.tableDates[this.tableDates.length - 1].Date;

    this.checkAvailability$ = this.serv.checkAvailability(this.searchData, this.global.GetServer());
    this.checkAvailability$.subscribe(res => {
      this.parkName = res.ParkName;
      this.panelOpenState = true;
      this.availableResults = res.AvailableResults;
      this.tableDates = res.Dates;
      this.loader = false;
      this.isOpen = true;
      localStorage.setItem('availableResults', JSON.stringify(res));
      localStorage.setItem('searchData', JSON.stringify(this.searchData));
    }, (error: HttpErrorResponse) => {
      this.snack.open(`An error occured on our servers: ${error.message}`, 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      }).afterDismissed().subscribe(() => {
        this.loader = false;
      });
      this.httpError = true;
      this.httpMessage = error.message;
    });
  }

  pastWeek() {
    this.loader = true;
    this.searchData.Forward = false;
    this.searchData.BaseDate = this.tableDates[0].Date;

    this.checkAvailability$ = this.serv.checkAvailability(this.searchData, this.global.GetServer());
    this.checkAvailability$.subscribe(res => {
      this.parkName = res.ParkName;
      this.panelOpenState = true;
      this.availableResults = res.AvailableResults;
      this.tableDates = res.Dates;
      this.loader = false;
      localStorage.setItem('availableResults', JSON.stringify(res));
      localStorage.setItem('searchData', JSON.stringify(this.searchData));
    }, (error: HttpErrorResponse) => {
      this.snack.open(`An error occured on our servers: ${error.message}`, 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      });

      this.loader = false;
    });
  }

  toggleAccommodationCollapse() {
    this.isAccommodation = !this.isAccommodation;
  }

  toggleActivityCollapse() {
    this.isActivity = !this.isActivity;
  }

  ViewAccommodationModal(accommodation): void {
    const accModal = this.dialog.open(ViewAccommodationModalComponent, {
      data: {accInfo: accommodation}
    });
  }

  ValidateSamePark(initialData) {
    const BookingItinerary: Booking = JSON.parse(localStorage.getItem('itinerary'));
    let ParkIDs = [];
    let flag = false;
    if (BookingItinerary) {
      ParkIDs = ParkIDs.concat(BookingItinerary.AccommodationBookings.filter(zz => zz.ParkID !== initialData.ParkID).map(zz => zz.ParkID));
      ParkIDs = ParkIDs.concat(BookingItinerary.ActivityBookings.filter(zz => zz.ParkID !== initialData.ParkID).map(zz => zz.ParkID));
      if (ParkIDs.length > 0) {
        flag = true;
      }
    }
    return flag;
  }

  addAccommodationBookingModal(initialData): void {
    localStorage.setItem('Dates', JSON.stringify(initialData.Dates));
    const accommodation = this.dialog.open(AddAccommodationBookingComponent, {
      disableClose: true,
      data: {accommodationData: initialData}
    });
  }

  bookWeek(bookingData, campID) { // For accommodation booking adding
    if (this.searchData.AccommodationChecked) {
      bookingData.campID = campID;
      bookingData.Dates = this.tableDates;
      bookingData.EndDate = this.boundaryDate;
      bookingData.StartDate = this.startDate;
      bookingData.BaseRate = null;

      console.log(bookingData);

      const BookingsItinerary: Booking = JSON.parse(localStorage.getItem('itinerary'));
      if (BookingsItinerary) {
        // there are bookings in the itinerary already
        let campIDs: any[] = [];
        campIDs = campIDs.concat(BookingsItinerary.AccommodationBookings.filter(zz => zz.CampID !== bookingData.campID)
                  .map(zz => zz.CampID));
        const added: any[] = campIDs.concat(BookingsItinerary.ActivityBookings.filter(zz => zz.CampID !== bookingData.campID)
                              .map(zz => zz.CampID));
        console.log(added);

        if (added.length !== 0) {
          this.mapLoader = true;
          const distanceRequest = {
            CurrentCampID: bookingData.campID,
            CompareCamps: added
          };

          this.serv.checkDistances(distanceRequest, this.global.GetServer()).subscribe(res => {
            if (res === false) {
              this.addAccommodationBookingModal(bookingData);
              this.mapLoader = false;
            } else {
              this.snack.open('You have booked at a camp that is 40KMs away from your other bookings. Unable to book here.', 'OK', {
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                duration: 5000
              });
            }
          }, (error: HttpErrorResponse) => {
            this.mapLoader = false;
            console.log(error.message);
            this.snack.open('An Error occured on our servers, please try again.', 'OK', {
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              duration: 5000
            });
          });
        } else {
          this.addAccommodationBookingModal(bookingData);
        }
      } else {
        this.addAccommodationBookingModal(bookingData);
      }
    } else if (this.searchData.ActivityChecked) {

    } else if (this.searchData.DayVisitChecked) {

    }
  }

  addActivityModal(initialData) {
    localStorage.setItem('Dates', JSON.stringify(this.tableDates));
    const activity = this.dialog.open(AddActivityBookingComponent, {
      disableClose: true,
      data: {actData: initialData}
    });
  }

  bookActivity(initialData) {
    const BookingsItinerary: Booking = JSON.parse(localStorage.getItem('itinerary'));
    if (BookingsItinerary) {
      // there are bookings in the itinerary already
      let campIDs: any[] = [];
      campIDs = campIDs.concat(BookingsItinerary.AccommodationBookings.filter(zz => zz.CampID !== initialData.CampID)
                .map(zz => zz.CampID));
      const added: any[] = campIDs.concat(BookingsItinerary.ActivityBookings.filter(zz => zz.CampID !== initialData.CampID)
                            .map(zz => zz.CampID));
      console.log(added);

      if (added.length !== 0) {
        this.mapLoader = true;
        const distanceRequest = {
          CurrentCampID: initialData.CampID,
          CompareCamps: added
        };

        this.serv.checkDistances(distanceRequest, this.global.GetServer()).subscribe(res => {
          if (res === false) {
            this.addActivityModal(initialData);
            this.mapLoader = false;
          } else {
            this.snack.open('You have booked at a camp that is 40KMs away from your other bookings. Unable to book here.', 'OK', {
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              duration: 5000
            });
          }
        }, (error: HttpErrorResponse) => {
          this.mapLoader = false;
          this.snack.open('An Error occured on our servers, please try again.', 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000
          });
        });
      } else {
        this.addActivityModal(initialData);
      }
    } else {
      this.addActivityModal(initialData);
    }
  }

  bookDayVisit(initialData) {
    const BookingItinerary: Booking = JSON.parse(localStorage.getItem('itinerary'));
    let ParkIDs = [];
    let flag = false;
    console.log(initialData);
    if (BookingItinerary) {
      ParkIDs = ParkIDs.concat(BookingItinerary.AccommodationBookings.filter(zz => zz.ParkID !== initialData.ParkID).map(zz => zz.ParkID));
      ParkIDs = ParkIDs.concat(BookingItinerary.ActivityBookings.filter(zz => zz.ParkID !== initialData.ParkID).map(zz => zz.ParkID));
      if (ParkIDs[0] !== undefined) {
        flag = true;
      }
    }

    if (flag) {
      this.snack.open('You have reservations in a different Park, you may only book at one park', 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      });
    } else {
      localStorage.setItem('Dates', JSON.stringify(initialData.Dates));
      const day = this.dialog.open(AddDayvisitComponent, {
        disableClose: true,
        data: {dayData: initialData}
      });
    }
  }


  ViewMore() {
  }
}
