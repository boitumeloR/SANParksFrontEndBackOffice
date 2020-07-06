import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateWildcardClusterSuccessfulComponent} from 'src/app/modals/wildcard-cluster/update-wildcard-cluster-successful/update-wildcard-cluster-successful.component';

@Component({
  selector: 'app-update-wildcard-cluster-confirmation',
  templateUrl: './update-wildcard-cluster-confirmation.component.html',
  styleUrls: ['./update-wildcard-cluster-confirmation.component.scss']
})
export class UpdateWildcardClusterConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateWildcardCluster(){
    const updateWildcardClusterSuccessfulDialog = this.dialog.open(UpdateWildcardClusterSuccessfulComponent);
  }
}
