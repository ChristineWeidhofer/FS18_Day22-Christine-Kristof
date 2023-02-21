import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new FormGroup ({
    name: new FormControl(''),
    email: new FormControl(''),
    msg: new FormControl('')
  });

  onSubmit(){
    // to take the values from the form you can select the property that have the formGroup and then just add .value - and then put the property from .this at the end to get the single properties
      let valName = this.contactForm.value.name;
      let valEmail = this.contactForm.value.email;
      let valMsg = this.contactForm.value.msg;
  
      let selector = document.getElementById("output")as HTMLElement;
      selector.innerHTML = (`<b>${valName}</b> with the email address <b>${valEmail}</b> wrote you this message: <b>${valMsg}<b>`);
  }
}
