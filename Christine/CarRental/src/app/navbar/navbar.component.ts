import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  projectName: string = "Car Rental Agency";

  donation: number = 0;

  addDonation() {
    this.donation += 10;
    console.log(this.donation);
  }
}
