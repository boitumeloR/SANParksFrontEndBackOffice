import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from 'src/app/services/Global/global.service';
import { SettingsService } from 'src/app/services/Settings/settings.service';

@Component({
  selector: 'app-user-time-out',
  templateUrl: './user-time-out.component.html',
  styleUrls: ['./user-time-out.component.scss']
})
export class UserTimeOutComponent implements OnInit {
  addSession: FormGroup;
  constructor(private formBuilder: FormBuilder, private validationErrorSnack: MatSnackBar,
              private globalService: GlobalService, private settingService: SettingsService) { }

  ngOnInit(): void {
    this.addSession = this.formBuilder.group({
      sessionTime: ['', [Validators.required, Validators.min(1), Validators.max(90)]]
    });
  }

  addTimeOut(){
  if (this.addSession.invalid){
    this.validationError();
  }
  else{
    const setting = {
      sessionTimeOut: this.addSession.get('sessionTime').value
    };
    this.settingService.createSessionExpiry(setting, this.globalService.GetServer());
    }
  }

  validationError() {
    this.validationErrorSnack.open(`Session time must be in the interval of 1 and 90 minutes.` , 'OK', {
      duration: 5000,
    });
  }
}
