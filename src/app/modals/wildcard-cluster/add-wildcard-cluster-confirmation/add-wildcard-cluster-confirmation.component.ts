import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddWildcardClusterSuccessfulComponent} from 'src/app/modals/wildcard-cluster/add-wildcard-cluster-successful/add-wildcard-cluster-successful.component';

@Component({
  selector: 'app-add-wildcard-cluster-confirmation',
  templateUrl: './add-wildcard-cluster-confirmation.component.html',
  styleUrls: ['./add-wildcard-cluster-confirmation.component.scss']
})
export class AddWildcardClusterConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddWildcardCluster(){
    const addWildcardClusterSuccessfulDialog = this.dialog.open(AddWildcardClusterSuccessfulComponent);
  }
}
