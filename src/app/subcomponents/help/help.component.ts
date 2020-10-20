import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  helpForm: FormGroup;
  questionAsked = false;
  thisHelpDisplay: boolean;
  constructor(private formBuilder: FormBuilder, private micActiveSnackBar: MatSnackBar, private cdRef: ChangeDetectorRef,
              private employeeService: EmployeeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.helpForm = this.formBuilder.group({
      feedback: [''],
      question: ['']
    });
  }

  talk(){
    this.speakFunction();
  }

  provideFeedback(userInput: any){
    const speech =  new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.text = 'Sorry, I do not understand your question as yet.';

    console.log(userInput);
    if (userInput.toLowerCase().includes('create a park' || userInput.toLowerCase().includes('create park') )){
      speech.text = `You need to navigate to the park drop down on the menu and select the park option. Once the page loads, you click the green plus button on the right side of the page to begin creating your park. You will enter the following information: Park name, park limit, latitude, and longitude co-ordinates of the park and lastly a park description. Click the green create button to create the park. Thereafter click the green Yes button to confirm the creation of the park.`;
    }
    else if (userInput.toLowerCase().includes('read park') || userInput.toLowerCase().includes('read a park')){
      speech.text = `You need to navigate to the park drop down on the menu and select the park option. Once the page loads, enter the name of the park you wish to search in the keyword filter bar. Upon successful search, click the view park icon to view the searched park`;
    }
    else if (userInput.toLowerCase().includes('update park') || userInput.toLowerCase().includes('update a park')){
      speech.text = `You need to navigate to the park drop down on the menu and select the park option. Once the page loads, enter the name of the park you wish to search in the keyword filter bar. Upon successful search, click the view park icon to view the searched park. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete park' || userInput.toLowerCase().includes('delete a park'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the park option. Once the page loads, enter the name of the park you wish to search in the keyword filter bar. Upon successful search, click the view park icon to view the searched park. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Activity Slot
    else if (userInput.toLowerCase().includes('create an activity slot' || userInput.toLowerCase().includes('create activity slot') )){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity slot option. Once the page loads, you click the green plus button on the right side of the page to begin creating your activity slot. You will enter the following information: park, camp, activity type, activity, slot time, start date and lastly end date. Click the green create button to create the activity slot. Thereafter click the green Yes button to confirm the creation of the activity slot.`;
    }
    else if (userInput.toLowerCase().includes('read activity slot') || userInput.toLowerCase().includes('read an activity slot')){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity slot option. Once the page loads, enter the name of the activity slot you wish to search in the keyword filter bar. Upon successful search, click the view activity slot icon to view the searched activity slot.`;
    }
    else if (userInput.toLowerCase().includes('update activtiy slot') || userInput.toLowerCase().includes('update an activity slot')){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity slot option. Once the page loads, enter the name of the activity slot you wish to search in the keyword filter bar. Upon successful search, click the view activity slot icon to view the searched activity slot. Thereafter click the green update button. You will enter the following updated information: park, camp, activity type, activity, slot time, start date and lastly end date and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete activity slot' || userInput.toLowerCase().includes('delete an activtiy slot'))){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity slot option. Once the page loads, enter the name of the activity slot you wish to search in the keyword filter bar. Upon successful search, click the view activity slot icon to view the searched Activity slot. Thereafter click the red delete button.`;
    }

    // Camp Type
    else if (userInput.toLowerCase().includes('create camp type' || userInput.toLowerCase().includes('create a camp type') )){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp type option. Once the page loads, you click the green plus button on the right side of the page to begin creating your camp type. You will enter the following information: camp type name, and lastly camp type description. Click the green create button to create the camp type. Thereafter click the green Yes button to confirm the creation of the camp type.`;
    }
    else if (userInput.toLowerCase().includes('read camp type') || userInput.toLowerCase().includes('read a camp type')){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp type option. Once the page loads, enter the name of the camp type you wish to search in the keyword filter bar. Upon successful search, click the view camp type icon to view the searched camp type. `;
    }
    else if (userInput.toLowerCase().includes('update camp type') || userInput.toLowerCase().includes('update a camp type')){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp type option. Once the page loads, enter the name of the camp type you wish to search in the keyword filter bar. Upon successful search, click the view camp type icon to view the searched camp type. Thereafter click the green update button. You will enter the following information: camp type name, and lastly camp type description and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete camp type' || userInput.toLowerCase().includes('delete a camp type'))){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp type option. Once the page loads, enter the name of the camp type you wish to search in the keyword filter bar. Upon successful search, click the view camp type icon to view the searched camp type. Thereafter click the red delete button.`;
    }

    // Daily Conservation Fee
    else if (userInput.toLowerCase().includes('create a daily conservation fee' || userInput.toLowerCase().includes('create daily conservation fee'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the daily conservation fee option. Once the page loads, you click the green plus button on the right side of the page to begin creating your daily conservation fee. You will enter the following information: park, region, child amount, adult amount and lastly year effective. Click the green create button to create the daily conservation fee. Thereafter click the green Yes button to confirm the creation of the daily conservation fee.`;
    }
    else if (userInput.toLowerCase().includes('read daily conservation fee') || userInput.toLowerCase().includes('read a daily conservation fee')){
      speech.text = `You need to navigate to the park drop down on the menu and select the daily conservation fee option. Once the page loads, enter the name of the daily conservation fee you wish to search in the keyword filter bar. Upon successful search, click the view conservation fee icon to view the searched daily conservation fee.`;
    }
    else if (userInput.toLowerCase().includes('update daily conservation fee') || userInput.toLowerCase().includes('update a daily conservation fee')){
      speech.text = `You need to navigate to the park drop down on the menu and select the daily conservation fee option. Once the page loads, enter the name of the daily conservation fee you wish to search in the keyword filter bar. Upon successful search, click the view conservation fee icon to view the searched daily conservation fee. Thereafter click the green update button. You will enter the following updated information: park, region, child amount, adult amount and lastly year effective and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete daily conservation fee' || userInput.toLowerCase().includes('delete a daily conservation fee'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the daily conservation fee option. Once the page loads, enter the name of the daily conservation fee you wish to search in the keyword filter bar. Upon successful search, click the view conservation fee icon to view the searched daily conservation fee. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Employee
    else if (userInput.toLowerCase().includes('create employee' || userInput.toLowerCase().includes('create an employee'))){
      speech.text = `You need to navigate to the user drop down on the menu and select the employee option. Once the page loads, you click the green plus button on the right side of the page to begin creating your employee. You will enter the following information: title, name, surname, identity number, Cellphone number, work number, email address, address line 1, address line 2, postal code and then click the next button  and continue to enter the following information: park, user role and lastly an employee status. Click the green create button to create the employee. Thereafter click the green Yes button to confirm the creation of the employee.`;
    }
    else if (userInput.toLowerCase().includes('read employee') || userInput.toLowerCase().includes('read an employee')){
      speech.text = `You need to navigate to the user drop down on the menu and select the employee option. Once the page loads, enter the name of the employee you wish to search in the keyword filter bar. Upon successful search, click the view employee icon to view the searched employee.`;
    }
    else if (userInput.toLowerCase().includes('update employee') || userInput.toLowerCase().includes('update an employee')){
      speech.text = `You need to navigate to the user drop down on the menu and select the employee option. Once the page loads, enter the name of the employee you wish to search in the keyword filter bar. Upon successful search, click the view employee icon to view the searched employee. Thereafter click the green update button. You will enter the following updated information: title, name, surname, identity number, Cellphone number, work number, email address, address line 1, address line 2, postal code and then click the next button  and continue to enter the following updated information: park, user role and lastly an employee status and click the green update button. Click yes to confirm the update.`;
    }

    // Park Gate Time
    else if (userInput.toLowerCase().includes('create a park gate time' || userInput.toLowerCase().includes('create park gate time'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the park gate time option. Once the page loads, you click the green plus button on the right side of the page to begin creating your park gate time. You will enter the following information: park, park gate, season, gate opening time and lastly gate closing time. Click the green create button to create the park gate time. Thereafter click the green Yes button to confirm the creation of the park gate time. `;
    }
    else if (userInput.toLowerCase().includes('read park gate time') || userInput.toLowerCase().includes('read a park gate time')){
      speech.text = `You need to navigate to the park drop down on the menu and select the park gate time option. Once the page loads, enter the name of the park gate time you wish to search in the keyword filter bar. Upon successful search, click the view gate time icon to view the searched park gate time.`;
    }
    else if (userInput.toLowerCase().includes('update park gate time') || userInput.toLowerCase().includes('update a park gate time')){
      speech.text = `You need to navigate to the park drop down on the menu and select the park gate time option. Once the page loads, enter the name of the park gate time you wish to search in the keyword filter bar. Upon successful search, click the view gate time icon to view the searched park gate time. Thereafter click the green update button. You will enter the following updated information: park, park gate, season, gate opening time and lastly gate closing time and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete park gate time' || userInput.toLowerCase().includes('delete a park gate time'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the park gate time option. Once the page loads, enter the name of the park gate time you wish to search in the keyword filter bar. Upon successful search, click the view gate time icon to view the searched park gate time. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Park Gate
    else if (userInput.toLowerCase().includes('create a park gate' || userInput.toLowerCase().includes('create park gate'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the park gate option. Once the page loads, you click the green plus button on the right side of the page to begin creating your park gate. You will enter the following information: park gate name, park, park gate limit, park gate latitude, park gate longitude and lastly a park gate description. Click the green create button to create the park gate. Thereafter click the green Yes button to confirm the creation of the park gate.`;
    }
    else if (userInput.toLowerCase().includes('read park gate') || userInput.toLowerCase().includes('read a park gate')){
      speech.text = `You need to navigate to the park drop down on the menu and select the park gate option. Once the page loads, enter the name of the park gate you wish to search in the keyword filter bar. Upon successful search, click the view park gate icon to view the searched park gate.`;
    }
    else if (userInput.toLowerCase().includes('update park gate') || userInput.toLowerCase().includes('update a park gate')){
      speech.text = `You need to navigate to the park drop down on the menu and select the park gate option. Once the page loads, enter the name of the park gate you wish to search in the keyword filter bar. Upon successful search, click the view park gate icon to view the searched park gate. Thereafter click the green update button. You will enter the following updated information: park gate name, park, park gate limit, park gate latitude, park gate longitude and lastly a park gate description and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete park gate' || userInput.toLowerCase().includes('delete a park gate'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the park gate option. Once the page loads, enter the name of the park gate you wish to search in the keyword filter bar. Upon successful search, click the view park gate icon to view the searched park gate. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Season
    else if (userInput.toLowerCase().includes('create a season' || userInput.toLowerCase().includes('create season'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the season option. Once the page loads, you click the green plus button on the right side of the page to begin creating your season. You will enter the following information: season name, start date and lastly the end date. Click the green create button to create the season. Thereafter click the green Yes button to confirm the creation of the season.`;
    }
    else if (userInput.toLowerCase().includes('read season') || userInput.toLowerCase().includes('read a season')){
      speech.text = `You need to navigate to the park drop down on the menu and select the season option. Once the page loads, enter the name of the season you wish to search in the keyword filter bar. Upon successful search, click the view season icon to view the searched season.`;
    }
    else if (userInput.toLowerCase().includes('update season') || userInput.toLowerCase().includes('update a season')){
      speech.text = `You need to navigate to the park drop down on the menu and select the season option. Once the page loads, enter the name of the season you wish to search in the keyword filter bar. Upon successful search, click the view season icon to view the searched season. Thereafter click the green update button. You will enter the following updated information: season name, start date and lastly the end date and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete season' || userInput.toLowerCase().includes('delete a season'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the season option. Once the page loads, enter the name of the season you wish to search in the keyword filter bar. Upon successful search, click the view season icon to view the searched season. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // User Role
    else if (userInput.toLowerCase().includes('create a user role' || userInput.toLowerCase().includes('create user role'))){
      speech.text = `You need to navigate to the user drop down on the menu and select the user role option. Once the page loads, you click the green plus button on the right side of the page to begin creating your user role. You will enter the following information: user role name and lastly a user role description. Click the green create button to create the user role. Thereafter click the green Yes button to confirm the creation of the user role.`;
    }
    else if (userInput.toLowerCase().includes('read user role') || userInput.toLowerCase().includes('read a user role')){
      speech.text = `You need to navigate to the user drop down on the menu and select the user role option. Once the page loads, enter the name of the user role you wish to search in the keyword filter bar. Upon successful search, click the view user role icon to view the searched user role.`;
    }
    else if (userInput.toLowerCase().includes('update user role') || userInput.toLowerCase().includes('update a user role')){
      speech.text = `You need to navigate to the user drop down on the menu and select the user role option. Once the page loads, enter the name of the user role you wish to search in the keyword filter bar. Upon successful search, click the view user role icon to view the searched user role. Thereafter click the green update button. You will enter the following updated information: user role name and lastly a user role description. and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete user role' || userInput.toLowerCase().includes('delete a user role'))){
      speech.text = `You need to navigate to the user drop down on the menu and select the user role option. Once the page loads, enter the name of the user role you wish to search in the keyword filter bar. Upon successful search, click the view user role icon to view the searched user role. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Wildcard Category
    else if (userInput.toLowerCase().includes('create a wildcard category' || userInput.toLowerCase().
      includes('create wildcard category'))){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard category option. Once the page loads, you click the green plus button on the right side of the page to begin creating your wildcard category. You will enter the following information: wildcard category name, wildcard category description, adult limit and lastly, child limit. Click the green create button to create the wildcard category. Thereafter click the green Yes button to confirm the creation of the wildcard category.`;
    }
    else if (userInput.toLowerCase().includes('read wildcard category') || userInput.toLowerCase().includes('read a wildcard category')){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard category option. Once the page loads, enter the name of the wildcard category you wish to search in the keyword filter bar.  Upon successful search, click the view category icon to view the searched wildcard category.`;
    }
    else if (userInput.toLowerCase().includes('update wildcard category') || userInput.toLowerCase().
      includes('update a wildcard category')){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard category option. Once the page loads, enter the name of the wildcard category you wish to search in the keyword filter bar.  Upon successful search, click the view category icon to view the searched wildcard category. Thereafter click the green update button. You will enter the following updated information: wildcard category name, wildcard category description, adult limit and lastly, child limit and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete wildcard category' || userInput.toLowerCase().
      includes('delete a wildcard category'))){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard category option. Once the page loads, enter the name of the wildcard category you wish to search in the keyword filter bar.  Upon successful search, click the view category icon to view the searched Wildcard category. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Wildcard Cluster
    else if (userInput.toLowerCase().includes('create a wildcard cluster' || userInput.toLowerCase().includes('create wildcard cluster'))){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard cluster option. Once the page loads, you click the green plus button on the right side of the page to begin creating your wildcard cluster. You will enter the following information: wildcard cluster name, wildcard cluster description and lastly parks in cluster. Click the green create button to create the wildcard cluster. Thereafter click the green Yes button to confirm the creation of the wildcard cluster.`;
    }
    else if (userInput.toLowerCase().includes('read wildcard cluster') || userInput.toLowerCase().includes('read a wildcard cluster')){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard cluster option. Once the page loads, enter the name of the wildcard cluster you wish to search in the keyword filter bar. Upon successful search, click the view cluster icon to view the searched wildcard cluster.`;
    }
    else if (userInput.toLowerCase().includes('update wildcard cluster') || userInput.toLowerCase().includes('update a wildcard cluster')){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard cluster option. Once the page loads, enter the name of the wildcard cluster you wish to search in the keyword filter bar. Upon successful search, click the view cluster icon to view the searched wildcard cluster. Thereafter click the green update button. You will enter the following updated information: wildcard cluster name, wildcard cluster description and lastly parks in cluster and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete wildcard cluster' || userInput.toLowerCase().includes('delete a wildcard cluster'))){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard cluster option. Once the page loads, enter the name of the wildcard cluster you wish to search in the keyword filter bar. Upon successful search, click the view cluster icon to view the searched Wildcard cluster. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Wildcard Rate
    else if (userInput.toLowerCase().includes('create a wildcard rate' || userInput.toLowerCase().includes('create wildcard rate'))){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard rate option. Once the page loads, you click the green plus button on the right side of the page to begin creating your wildcard rate. You will enter the following information: wildcard cluster, wildcard category, wildcard rate and lastly year effective. Click the green create button to create the wildcard rate. Thereafter click the green Yes button to confirm the creation of the wildcard rate.`;
    }
    else if (userInput.toLowerCase().includes('read wildcard rate') || userInput.toLowerCase().includes('read a wildcard rate')){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard rate option. Once the page loads, enter the name of the wildcard rate you wish to search in the keyword filter bar. Upon successful search, click the view rate icon to view the searched wildcard rate.`;
    }
    else if (userInput.toLowerCase().includes('update wildcard rate') || userInput.toLowerCase().includes('update a wildcard rate')){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard rate option. Once the page loads, enter the name of the wildcard rate you wish to search in the keyword filter bar. Upon successful search, click the view rate icon to view the searched wildcard rate. Thereafter click the green update button. You will enter the following updated information: wildcard cluster, wildcard category, wildcard rate and lastly year effective and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete wildcard rate' || userInput.toLowerCase().includes('delete a wildcard rate'))){
      speech.text = `You need to navigate to the wildcard drop down on the menu and select the wildcard rate option. Once the page loads, enter the name of the wildcard rate you wish to search in the keyword filter bar. Upon successful search, click the view rate icon to view the searched Wildcard rate. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Camp
    else if (userInput.toLowerCase().includes('create a camp' || userInput.toLowerCase().includes('create camp'))){
    speech.text = `You need to navigate to the camp drop down on the menu and select the camp option. Once the page loads, you click the green plus button on the right side of the page to begin creating your camp. You will enter the following information: camp name, camp type, park name, camp description and latitude, and longitude co-ordinates of the camp. Click the green create button to create the camp. Thereafter click the green Yes button to confirm the creation of the camp.`;
    }
    else if (userInput.toLowerCase().includes('read camp') || userInput.toLowerCase().includes('read a camp')){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp option. Once the page loads, enter the name of the camp you wish to search in the keyword filter bar. Upon successful search, click the view camp icon to view the searched camp`;
    }
    else if (userInput.toLowerCase().includes('update camp') || userInput.toLowerCase().includes('update a camp')){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp option. Once the page loads, enter the name of the camp you wish to search in the keyword filter bar. Upon successful search, click the view camp icon to view the searched camp. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete camp' || userInput.toLowerCase().includes('delete a camp'))){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp option. Once the page loads, enter the name of the camp you wish to search in the keyword filter bar. Upon successful search, click the view camp ark icon to view the searched camp. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Camp Gate Time
    else if (userInput.toLowerCase().includes('create a camp gate time' || userInput.toLowerCase().includes('create camp gate time'))){
    speech.text = `You need to navigate to the camp drop down on the menu and select the camp gate time option. Once the page loads, you click the green plus button on the right side of the page to begin creating your park. You will enter the following information: Park name, camp name, season name, gate opening time and gate closing time. Click the green create button to create the camp gate time. Thereafter click the green Yes button to confirm the creation of the camp gate time`;
    }
    else if (userInput.toLowerCase().includes('read camp gate time') || userInput.toLowerCase().includes('read a camp gate time')){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp gate time option. Once the page loads, enter the name of the camp you wish to search in the keyword filter bar. Upon successful search, click the view gate time icon to view the searched camps gate times.`;
    }
    else if (userInput.toLowerCase().includes('update camp gate time') || userInput.toLowerCase().includes('update a camp gate time')){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp gate time option. Once the page loads, enter the name of the camp you wish to search in the keyword filter bar. Upon successful search, click the view gate time icon to view the searched camps gate times. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete camp gate time' || userInput.toLowerCase().includes('delete a camp gate time'))){
      speech.text = `You need to navigate to the camp drop down on the menu and select the camp gate time option. Once the page loads, enter the name of the camp you wish to search in the keyword filter bar. Upon successful search, click the view gate time icon to view the searched camps gate times. Thereafter click the red delete button. Click yes to confirm the delete.
      `;
    }

    // Accommodation Type
    else if (userInput.toLowerCase().includes('create an accommodation type' || userInput.toLowerCase().
      includes('create accommodation type'))){
    speech.text = `You need to navigate to the Accommodation drop down on the menu and select the accommodation type option. Once the page loads, you click the green plus button on the right side of the page to begin creating your accommodation type. You will enter the following information in the first part of the stepper: Accommodation type name, accommodation type description, number of beds, number of baths, max capacity, base adult mount and base child amount. Click the green create button to create the park. Thereafter click the green Yes button to confirm the creation of the park.`;
    }
    else if (userInput.toLowerCase().includes('read accommodation type') || userInput.toLowerCase().includes('read an accommodation type')){
      speech.text = `You need to navigate to the park drop down on the menu and select the park option. Once the page loads, enter the name of the park you wish to search in the keyword filter bar. Upon successful search, click the view park icon to view the searched park`;
    }
    else if (userInput.toLowerCase().includes('update accommodation type') || userInput.toLowerCase().includes('update an accommodation type')){
      speech.text = `You need to navigate to the park drop down on the menu and select the park option. Once the page loads, enter the name of the park you wish to search in the keyword filter bar. Upon successful search, click the view park icon to view the searched park. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete accommodation type' || userInput.toLowerCase().
      includes('delete an accommodation type'))){
      speech.text = `You need to navigate to the park drop down on the menu and select the park option. Once the page loads, enter the name of the park you wish to search in the keyword filter bar. Upon successful search, click the view park icon to view the searched park. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Accomodation
    else if (userInput.toLowerCase().includes('create an accommodation' || userInput.toLowerCase().includes('create accommodation'))){
    speech.text = `You need to navigate to the Accommodation drop down on the menu and select the accommodation option. Once the page loads, you click the green plus button on the right side of the page to begin creating your accommodation. You will enter the following information: Park name, camp name, unit number and accommodation type. Click the green create button to create the accommodation. Thereafter click the green Yes button to confirm the creation of the park.`;
    }
    else if (userInput.toLowerCase().includes('read accommodation') || userInput.toLowerCase().includes('read an accommodation')){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the accommodation option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view accommodation icon to view the searched accommodation`;
    }
    else if (userInput.toLowerCase().includes('update accommodation') || userInput.toLowerCase().includes('update an accommodation')){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the accommodation option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view accommodation icon to view the searched accommodation. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete accommodation' || userInput.toLowerCase().includes('delete an accommodation'))){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the accommodation option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view accommodation icon to view the searched accommodation. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Accomodation Base Rate
    else if (userInput.toLowerCase().includes('create an accommodation base rate' || userInput.toLowerCase().includes('create accommodation base rate'))){
    speech.text = `You need to navigate to the Accommodation drop down on the menu and select the base rate option. Once the page loads, you click the green plus button on the right side of the page to begin creating your base rate. You will enter the following information: Park name, camp name, accommodation type, season name and base rate amount. Click the green create button to create the base rate. Thereafter click the green Yes button to confirm the creation of the base rate.`;
    }
    else if (userInput.toLowerCase().includes('read accommodation base rate') || userInput.toLowerCase().includes('read an accommodation base rate')){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the base rate option Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view base rate icon to view the searched base rate`;
    }
    else if (userInput.toLowerCase().includes('update accommodation base rate') || userInput.toLowerCase().includes('update an accommodation base rate')){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the base rate option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view park icon to view the searched base rate. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete accommodation base rate' || userInput.toLowerCase().includes('delete an accommodation base rate'))){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the base rate option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view base rate icon to view the searched base rate. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Accomodation Add Rate
    else if (userInput.toLowerCase().includes('create an accommodation add rate' || userInput.toLowerCase().includes('create accommodation add rate'))){
    speech.text = `You need to navigate to the Accommodation drop down on the menu and select the add rate option. Once the page loads, you click the green plus button on the right side of the page to begin creating your add rate. You will enter the following information: accommodation type, adult rate, child rate and year effective. Click the green create button to create the add rate. Thereafter click the green Yes button to confirm the creation of the add rate.`;
    }
    else if (userInput.toLowerCase().includes('read accommodation add rate') || userInput.toLowerCase().includes('read an accommodation add rate')){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the add rate option. Once the page loads, enter a keyword to search in the keyword filter bar.  Upon successful search, click the view add rate icon to view the searched accommodation add rate.`;
    }
    else if (userInput.toLowerCase().includes('update accommodation add rate') || userInput.toLowerCase().includes('update an accommodation add rate')){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the add rate option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view add rate icon to view the searched accommodation add rate. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete accommodation add rate' || userInput.toLowerCase().includes('delete an accommodation add rate'))){
      speech.text = `You need to navigate to the Accommodation drop down on the menu and select the add rate option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view add rate icon to view the searched accommodation add rate. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Amenity Type
    else if (userInput.toLowerCase().includes('create an amenity type' || userInput.toLowerCase().includes('create amenity type'))){
    speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity type option. Once the page loads, you click the green plus button on the right side of the page to begin creating your amenity type. You will enter the following information: amenity type name. Click the green create button to create the amenity type. Thereafter click the green Yes button to confirm the creation of the amenity type.`;
    }
    else if (userInput.toLowerCase().includes('read amenity type') || userInput.toLowerCase().includes('read an amenity type')){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity type option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity type icon to view the searched amenity type`;
    }
    else if (userInput.toLowerCase().includes('update amenity type') || userInput.toLowerCase().includes('update an amenity type')){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity type option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity type icon to view the searched amenity type. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete amenity type' || userInput.toLowerCase().includes('delete an amenity type'))){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity type option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity type icon to view the searched amenity type. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Amenity
    else if (userInput.toLowerCase().includes('create an amenity' || userInput.toLowerCase().includes('create amenity'))){
    speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity option. Once the page loads, you click the green plus button on the right side of the page to begin creating your amenity. You will enter the following information in the first stepper: Park name, camp name, accommodation type name and unit number. In the second stepper you will enter the following information: amenity type, amenity description and amenity status. Click the green create button to create the amenity. Thereafter click the green Yes button to confirm the creation of the amenity.`;
    }
    else if (userInput.toLowerCase().includes('read amenity') || userInput.toLowerCase().includes('read an amenity')){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity icon to view the searched amenity.`;
    }
    else if (userInput.toLowerCase().includes('update amenity') || userInput.toLowerCase().includes('update an amenity')){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity icon to view the searched amenity. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete amenity' || userInput.toLowerCase().includes('delete an amenity'))){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity icon to view the searched amenity. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Amenity Penalty
    else if (userInput.toLowerCase().includes('create an amenity penalty' || userInput.toLowerCase().includes('create amenity penalty'))){
    speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity penalty option. Once the page loads, you click the green plus button on the right side of the page to begin creating your amenity penalty. You will enter the following information in the first stepper: Park name, camp name, accommodation type, unit number and amenity. In the second stepper you will enter the following information: amenity type, amenity description and amenity status. Click the green create button to create the amenity. Thereafter click the green Yes button to confirm the creation of the amenity penalty.`;
    }
    else if (userInput.toLowerCase().includes('read amenity penalty') || userInput.toLowerCase().includes('read an amenity penalty')){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity penalty option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity penalty icon to view the searched amenity penalty.`;
    }
    else if (userInput.toLowerCase().includes('update amenity penalty') || userInput.toLowerCase().includes('update an amenity penalty')){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity penalty option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity penalty icon to view the searched amenity penalty. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete amenity penalty' || userInput.toLowerCase().includes('delete an amenity penalty'))){
      speech.text = `You need to navigate to the amenity drop down on the menu and select the amenity Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view amenity penalty icon to view the searched amenity penalty. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Activity Type
    else if (userInput.toLowerCase().includes('create an activity type' || userInput.toLowerCase().includes('create activity type'))){
    speech.text = `You need to navigate to the activity drop down on the menu and select the activity type option. Once the page loads, you click the green plus button on the right side of the page to begin creating your activity type. You will enter the following information: activity type name. Click the green create button to create the activity type. Thereafter click the green Yes button to confirm the creation of the activity type.`;
    }
    else if (userInput.toLowerCase().includes('read activity type') || userInput.toLowerCase().includes('read an activity type')){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity type option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity type icon to view the searched activity type.`;
    }
    else if (userInput.toLowerCase().includes('update activity type') || userInput.toLowerCase().includes('update an activity type')){
      speech.text = `: You need to navigate to the activity drop down on the menu and select the activity type option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity type icon to view the searched activity type.Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete activity type' || userInput.toLowerCase().includes('delete an activity type'))){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity type option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity type icon to view the searched activity type. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Activity
    else if (userInput.toLowerCase().includes('create an activity' || userInput.toLowerCase().includes('create activity'))){
    speech.text = `You need to navigate to the activity drop down on the menu and select the activity option. Once the page loads, you click the green plus button on the right side of the page to begin creating your activity. You will enter the following information in the first stepper: activity type, activity description, maximum capacity, minimum age, and maximum age. In the second stepper you will select a camp. And in the last stepper you will be required to upload images. Click the green create button to create the activity. Thereafter click the green Yes button to confirm the creation of the activity.`;
    }
    else if (userInput.toLowerCase().includes('read activity') || userInput.toLowerCase().includes('read an activity')){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity icon to view the searched activity.`;
    }
    else if (userInput.toLowerCase().includes('update activity') || userInput.toLowerCase().includes('update an activity')){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity icon to view the searched activity. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete activity' || userInput.toLowerCase().includes('delete an activity'))){
      speech.text = `: You need to navigate to the activity drop down on the menu and select the activity option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity icon to view the searched activity. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }

    // Activtiy Rate
    else if (userInput.toLowerCase().includes('create an activity rate' || userInput.toLowerCase().includes('create activity rate'))){
    speech.text = `You need to navigate to the activity drop down on the menu and select the activity rate option. Once the page loads, you click the green plus button on the right side of the page to begin creating your activity rate. You will enter the following information in the first stepper: Park name, camp name, activity type and activity. In the second stepper you will enter the following information: rate type, person amount and year effective. Click the green create button to create the activity rate. Thereafter click the green Yes button to confirm the creation of the activity rate.`;
    }
    else if (userInput.toLowerCase().includes('read activity rate') || userInput.toLowerCase().includes('read an activity rate')){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity rate option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity rate icon to view the searched activity rate.`;
    }
    else if (userInput.toLowerCase().includes('update activity rate') || userInput.toLowerCase().includes('update an activity rate')){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity rate option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity rate icon to view the searched activity rate. Thereafter click the green update button. Enter the updated details and click the green update button. Click yes to confirm the update.`;
    }
    else if (userInput.toLowerCase().includes('delete activity rate' || userInput.toLowerCase().includes('delete an activity rate'))){
      speech.text = `You need to navigate to the activity drop down on the menu and select the activity rate option. Once the page loads, enter a keyword to search in the keyword filter bar. Upon successful search, click the view activity rate icon to view the searched activity rate. Thereafter click the red delete button. Click yes to confirm the delete.`;
    }


    this.helpForm.get('question').setValue(userInput);
    this.helpForm.get('feedback').setValue(speech.text.trim());

    this.questionAsked = true;
    this.cdRef.detectChanges();
    window.speechSynthesis.speak(speech);
  }

  micActiveMessage() {
    this.micActiveSnackBar.open('Your microphone has been activated.', '', {
      duration: 2000,
    });
  }

  speakFunction(){
    // tslint:disable-next-line: no-string-literal
    const SpeechRecognition = window.SpeechRecognition || window['webkitSpeechRecognition'];
    const helpRecognition = new SpeechRecognition();
    helpRecognition.start();
    helpRecognition.onstart = () => {
      this.micActiveMessage();
    };
    console.log('Hello World');
    helpRecognition.onresult  = (event) => {
      const currentIndex = event.resultIndex;
      const userInput = event.results[currentIndex][0].transcript;
      console.log(event);
      this.provideFeedback(userInput);
    };
  }
}
