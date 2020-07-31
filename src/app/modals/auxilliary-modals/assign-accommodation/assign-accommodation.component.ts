import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assign-accommodation',
  templateUrl: './assign-accommodation.component.html',
  styleUrls: ['./assign-accommodation.component.scss']
})
export class AssignAccommodationComponent implements OnInit {

  constructor(private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  Assigned() {
    this.snack.open('Successfully assigned accommodation', 'Okay', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
