import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
// we have to create a variable of FormGroup ,Validators imported from ....@angular/forms
//we have to create form controls--we have option to provide the initial state or default value as well as validators
  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {

        // first arg is initial state second is validators  
        uname: new FormControl('Garima', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        readTerms: new FormControl(false)
      }
    );
  }

  onSubmit() {
    this.myForm.reset();
  }
// set value function pass all values 
  accept() {
    this.myForm.setValue({
      readTerms: true
    });
  }

}
