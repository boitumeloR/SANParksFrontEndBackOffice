import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-activity-rate',
  templateUrl: './add-activity-rate.component.html',
  styleUrls: ['./add-activity-rate.component.scss']
})
export class AddActivityRateComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  rateTypes = [
    {
      ID: 0,
      Name: 'Adult/Child'
    },
    {
      ID: 1,
      Name: 'Per Hut'
    },
    {
      ID: 2,
      Name: 'Bike/No Bike'
    },
    {
      ID: 3,
      Name: 'Per Person'
    },
    {
      ID: 4,
      Name: 'Per Vehicle'
    }
  ];

  selected: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  print() {
    console.log(this.selected);

  }

}
