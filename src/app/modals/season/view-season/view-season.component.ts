import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateSeasonComponent } from 'src/app/modals/season/update-season/update-season.component';
import { DeleteSeasonComponent } from 'src/app/modals/season/delete-season/delete-season.component';
import { Season } from 'src/app/services/Season/season.service';
@Component({
  selector: 'app-view-season',
  templateUrl: './view-season.component.html',
  styleUrls: ['./view-season.component.scss']
})
export class ViewSeasonComponent implements OnInit {
  season: Season;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.season = JSON.parse(localStorage.getItem('season'));
  }

  updateSeason(){
    const updateSeasonDialog = this.dialog.open(UpdateSeasonComponent,{disableClose:true})
  }

  deleteSeason(){
    const deleteSeasonDialog = this.dialog.open(DeleteSeasonComponent);
  }
}
