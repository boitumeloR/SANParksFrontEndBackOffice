import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddWildcardClusterConfirmationComponent} from 'src/app/modals/wildcard-cluster/add-wildcard-cluster-confirmation/add-wildcard-cluster-confirmation.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-wildcard-cluster',
  templateUrl: './add-wildcard-cluster.component.html',
  styleUrls: ['./add-wildcard-cluster.component.scss']
})
export class AddWildcardClusterComponent implements OnInit {

  listOfParks = [{parkName:'Addo Elephant National Park'},{parkName:'Garden Route National Park'},{parkName:'Golden Gate Highlands National Park'},{parkName:'Karoo National Park'},{parkName:'Kruger National Park'},{parkName:'Namaqua National Park'},{parkName:'Table Mountain National Park'},{parkName:'West Coast National Park'}]
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addWildcardCluster(){
    const addWildcardClusterConfirmationDialog = this.dialog.open(AddWildcardClusterConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
