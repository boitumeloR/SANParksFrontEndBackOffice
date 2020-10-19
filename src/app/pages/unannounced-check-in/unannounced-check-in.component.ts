import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CheckInService } from 'src/app/services/CheckIn/check-in.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';

const ELEMENT_DATA: any[] = [
  { name: 'Tumi', surname: 'Rampete', ID: '99999999999', age: 22, country: 'South Africa'},
  { name: 'Jade', surname: 'Arumugam', ID: '99999999999', age: 22, country: 'South Africa'},
  { name: 'Robyn', surname: 'Pillay', ID: '999999999999', age: 22, country: 'South Africa'},
];

@Component({
  selector: 'app-unannounced-check-in',
  templateUrl: './unannounced-check-in.component.html',
  styleUrls: ['./unannounced-check-in.component.scss']
})
export class UnannouncedCheckInComponent implements OnInit {

  parkGates: any[];
  availableAmount: number;
  constructor(private dialog: MatDialog, private title: Title, private router: Router,
              private checkServ: CheckInService, private global: GlobalService) { }

  displayedColumns: string[] = ['name', 'surname', 'id', 'age', 'country'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.title.setTitle('Unannounced Check-In');

    const sess = JSON.parse(localStorage.getItem('user'));
    this.checkServ.GetParkGates(this.global.GetServer(), sess).subscribe(res => {
      if (res.Session) {
        localStorage.setItem('user', JSON.stringify(res.Session));
        this.parkGates = res.Gates;
      } else {
        this.router.navigateByUrl('Login');
        this.dialog.open(ErrorModalComponent, {
          data: {errorMessage: 'Session Error, login again.'}
        });
      }
    });
    this.dataSource.paginator = this.paginator;
  }

  GateAvailability() {
    
  }
}
