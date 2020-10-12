import { Component, OnInit, ViewChild } from '@angular/core';
import {UpdateWildcardClusterComponent} from 'src/app/modals/wildcard-cluster/update-wildcard-cluster/update-wildcard-cluster.component';
import {DeleteWildcardClusterComponent} from 'src/app/modals/wildcard-cluster/delete-wildcard-cluster/delete-wildcard-cluster.component';
import {MatDialog} from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/Global/global.service';
import { WildcardClusterService } from 'src/app/services/WildcardCluster/wildcard-cluster.service';

@Component({
  selector: 'app-view-wildcard-cluster',
  templateUrl: './view-wildcard-cluster.component.html',
  styleUrls: ['./view-wildcard-cluster.component.scss']
})
export class ViewWildcardClusterComponent implements OnInit {
  wildcardCluster;
  parkAvailableAt = '';

  @ViewChild('tree') tree;

  constructor(private dialog: MatDialog, private wildcardClusterService: WildcardClusterService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.wildcardCluster = JSON.parse(localStorage.getItem('wildcardCluster'));

    this.wildcardCluster.ParksInCluster.forEach(element => {
      this.parkAvailableAt +=  element.ParkName + '\n' ;
    });
  }

  updateWildcardCluster(){
    const updateWildcardDialog = this.dialog.open(UpdateWildcardClusterComponent, {disableClose: true});
  }

  deleteWildcardCluster(){
    const deleteWildcardDialog = this.dialog.open(DeleteWildcardClusterComponent);

    deleteWildcardDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.wildcardClusterService.DeleteWildcardCluster(authenticateUser, this.wildcardCluster.WildcardClusterID,
          this.globalService.GetServer());
      }
    });
  }
}
