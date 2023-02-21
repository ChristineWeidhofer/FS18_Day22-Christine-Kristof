import { Component } from '@angular/core';
import { cars } from '../cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projectName: string = "Car Rental Agency";
  newCars: Array<{brand: string, type: string, age: number}> = cars;

}
