import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-accommodation-modal',
  templateUrl: './view-accommodation-modal.component.html',
  styleUrls: ['./view-accommodation-modal.component.scss']
})
export class ViewAccommodationModalComponent implements OnInit {

  accommodation: any;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private serv: AvailabilityService,
              private global: GlobalService) { }

  ngOnInit(): void {
    this.accommodation = this.data.accInfo;
    this.serv.GetAccommodationImage(this.accommodation.AccommodationTypeID, this.global.GetServer()).subscribe(res => {
      this.accommodation.Image = `data:image/png;base64,${res.Image}`;
      this.accommodation.Rate = res.Rate;
    });
  }

}
