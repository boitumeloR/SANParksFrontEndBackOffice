import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteWildcardClusterSuccessfulComponent } from 'src/app/modals/wildcard-cluster/delete-wildcard-cluster-successful/delete-wildcard-cluster-successful.component';
import { DeleteWildcardClusterUnsuccessfulComponent } from 'src/app/modals/wildcard-cluster/delete-wildcard-cluster-unsuccessful/delete-wildcard-cluster-unsuccessful.component';

@Component({
  selector: 'app-delete-wildcard-cluster',
  templateUrl: './delete-wildcard-cluster.component.html',
  styleUrls: ['./delete-wildcard-cluster.component.scss']
})
export class DeleteWildcardClusterComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteWildcardCluster(){
    const deleteWildcardClusterSuccessfulDialog = this.dialog.open(DeleteWildcardClusterSuccessfulComponent);
  }

  unsuccessfulDeleteWildcardCluster(){
    const deleteWildcardClusterUnsuccessfulDialog = this.dialog.open(DeleteWildcardClusterUnsuccessfulComponent);
  }
}
