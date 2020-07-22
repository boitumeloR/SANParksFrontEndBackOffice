import { Component, OnInit } from '@angular/core';
import {UpdateWildcardClusterComponent} from 'src/app/modals/wildcard-cluster/update-wildcard-cluster/update-wildcard-cluster.component';
import {DeleteWildcardClusterComponent} from 'src/app/modals/wildcard-cluster/delete-wildcard-cluster/delete-wildcard-cluster.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-wildcard-cluster',
  templateUrl: './view-wildcard-cluster.component.html',
  styleUrls: ['./view-wildcard-cluster.component.scss']
})
export class ViewWildcardClusterComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateWildcardCluster(){
    const updateWildcardDialog = this.dialog.open(UpdateWildcardClusterComponent,{disableClose: true});
  }

  deleteWildcardCluster(){
    const deleteWildcardDialog = this.dialog.open(DeleteWildcardClusterComponent);
  }
}
