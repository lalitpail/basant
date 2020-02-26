import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'connecting People...';

  // loginForm: FormGroup;
  constructor() {
    // this.loginForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required])
    // });
  }

  // onSubmit() {
  //   if(this.loginForm.valid) {
  //     alert("Email ==>"+this.getFormValue().email+"\n Password ==>"+ this.getFormValue().password);
  //   }
  // }
  // getFormValue() {
  //   return this.loginForm.value;
  // }
}
