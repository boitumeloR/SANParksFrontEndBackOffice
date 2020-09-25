import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  helpForm: FormGroup;
  questionAsked = false;
  constructor(private formBuilder: FormBuilder, private micActiveSnackBar: MatSnackBar, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.helpForm = this.formBuilder.group({
      feedback: [''],
      question: ['']
    });

    const speech =  new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.text = 'Welcome Robyn Sancha Pillay, how may I help you today?';

    window.speechSynthesis.speak(speech);
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
    else if (userInput.toLowerCase().includes('What does Robyn like to do?')){
      speech.text = `She loves to eat! Nom Nom Nom`;
    }
    else if (userInput.toLowerCase().includes('What does Jade like to do?')){
      speech.text = `Burp burp burrrrrrrp`;
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
    const SpeechRecognition = window.SpeechRecognition || window['webkitSpeechRecognition'];
    const helpRecognition = new SpeechRecognition();
    helpRecognition.start();
    helpRecognition.onstart = () => {
      this.micActiveMessage();
    };

    helpRecognition.onresult  = (event) => {
      const currentIndex = event.resultIndex;
      const userInput = event.results[currentIndex][0].transcript;

      this.provideFeedback(userInput);
    };
  }
}
