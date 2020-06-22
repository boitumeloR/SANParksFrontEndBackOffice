import { Component, OnInit } from '@angular/core';
import { UpdateWildcardClusterConfirmationComponent } from 'src/app/modals/wildcard-cluster/update-wildcard-cluster-confirmation/update-wildcard-cluster-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-wildcard-cluster',
  templateUrl: './update-wildcard-cluster.component.html',
  styleUrls: ['./update-wildcard-cluster.component.scss']
})

export class UpdateWildcardClusterComponent implements OnInit {
  listOfParks = [{parkName:'Addo Elephant National Park'},{parkName:'Garden Route National Park'},{parkName:'Golden Gate Highlands National Park'},{parkName:'Karoo National Park'},{parkName:'Kruger National Park'},{parkName:'Namaqua National Park'},{parkName:'Table Mountain National Park'},{parkName:'West Coast National Park'}]
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateWildcardCluster(){
    const updateWildcardClusterConfirmationDialog = this.dialog.open(UpdateWildcardClusterConfirmationComponent)
  }
}
