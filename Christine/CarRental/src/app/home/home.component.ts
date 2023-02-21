import { Component } from '@angular/core';
import { cars } from '../cars';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projectName: string = "Car Rental Agency";
  newCars: Array<{brand: string, type: string, age: number}> = cars;

  carForm = new FormGroup ({
    brand: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  });

  addCars(){
    // to take the values from the form you can select the property that have the formGroup and then just add .value - and then put the property from .this at the end to get the single properties
    let valBrand = this.carForm.value.brand;
    let valType = this.carForm.value.type;
    let valAge = this.carForm.value.age;

    let sel = document.getElementById("error")as HTMLElement;

    if (this.carForm.valid) {
      let myVal: any = this.carForm.value; //müssen wir noch ausbessern, weil ANY is no good ;-)
      this.newCars.push(myVal);
      sel.innerHTML = `You just added to the list: ${valBrand}, powered by ${valType}, which is ${valAge} years old.`;
    } else {
      sel.style.color = "red";
      sel.innerHTML = `Please provide some information in every input field!`;
    }
  }

  authorize() {
    let selWrap = document.getElementById("wrapper")as HTMLElement;
    selWrap.style.display = "block";
  }

}
