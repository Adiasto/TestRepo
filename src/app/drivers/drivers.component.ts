import { Component, OnInit } from '@angular/core';
import { DriverApisService } from './driver-apis.service';
import { Driver } from './driverModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(private driverService: DriverApisService) { }

  allDrivers: Driver[];
  newDriver = new Driver();
  action = 'add';

  driverForm = new FormGroup({
    firstName: new FormControl(this.newDriver.firstName),
    lastName: new FormControl(this.newDriver.lastName),
    dob: new FormControl(this.newDriver.dob),
    licenseNo: new FormControl(this.newDriver.licenseNo),
    email: new FormControl(this.newDriver.email, [Validators.email]),
    phoneNumber: new FormControl(this.newDriver.phoneNumber, [Validators.maxLength(10), Validators.minLength(10)]),
    licenseExpiration: new FormControl(this.newDriver.licenseExpiration)
  });

  editRow;

  ngOnInit() {
    this.getAllDrivers();
  }

  submitForm() {
    if (this.action === 'add') {
      this.addDriver();
    } else if (this.action === 'update') {
      this.updateDriver();
    }
  }

  getAllDrivers() {
    this.allDrivers = this.driverService.getAllDrivers();
    this.driverForm.reset();
  }

  updateDriver() {
    this.allDrivers[this.editRow] = this.driverForm.value;
    this.allDrivers = this.driverService.updateDriver(this.allDrivers);
    this.driverForm.reset();
  }

  addDriver() {
    this.allDrivers = this.driverService.addDriver(this.allDrivers = null ? [] : this.allDrivers, this.driverForm.value);
    this.driverForm.reset();
  }

  editInfo(index) {
    this.driverForm.setValue(this.allDrivers[index]);
    this.action = 'update';
    this.editRow = index;
  }

}
