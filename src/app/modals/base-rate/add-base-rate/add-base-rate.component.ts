import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-base-rate',
  templateUrl: './add-base-rate.component.html',
  styleUrls: ['./add-base-rate.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddBaseRateComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  parks = new FormControl();
  parkList: string[] = ['Kruger National Park', 'Addo Elephant Park', 'Table Mountain Park'];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
