import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-accommodation-type',
  templateUrl: './add-accommodation-type.component.html',
  styleUrls: ['./add-accommodation-type.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddAccommodationTypeComponent implements OnInit {

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
