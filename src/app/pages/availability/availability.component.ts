import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/angular';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {


  isAccommodation = true;

  // Calendar

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    themeSystem: 'bootstrap',
    events: [
      {
        title: '12 Available',
        start: '2020-06-28',
        end: '2020-06-28'
      },
      {
        title: '12 Available',
        start: '2020-06-29',
        end: '2020-06-29'
      },
      {
        title: '12 Available',
        start: '2020-06-30',
        end: '2020-06-30'
      },
      {
        title: '12 Available',
        start: '2020-07-01',
        end: '2020-07-01'
      },
      {
        title: '12 Available',
        start: '2020-07-02',
        end: '2020-07-02'
      },
      {
        title: '12 Available',
        start: '2020-07-03',
        end: '2020-07-03'
      },
      {
        title: '12 Available',
        start: '2020-07-04',
        end: '2020-07-04'
      }
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {

    /*
    console.log(selectInfo);
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }*/
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  constructor() {
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleAccommodationCollapse() {
    this.isAccommodation = !this.isAccommodation;
  }

  ViewMore() {
  }
}
