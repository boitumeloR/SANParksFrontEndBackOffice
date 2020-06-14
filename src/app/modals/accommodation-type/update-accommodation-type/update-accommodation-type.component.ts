import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-accommodation-type',
  templateUrl: './update-accommodation-type.component.html',
  styleUrls: ['./update-accommodation-type.component.scss']
})
export class UpdateAccommodationTypeComponent implements OnInit {
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
