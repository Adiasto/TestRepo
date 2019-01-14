import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driverModel';

@Injectable({
  providedIn: 'root'
})
export class DriverApisService {

  constructor() { }

  getAllDrivers(): Driver[] {
    return JSON.parse(localStorage.getItem('drivers'));
  }

  updateDriver(driver: Driver[]) {
    localStorage.setItem('drivers', JSON.stringify(driver));
    return this.getAllDrivers();
  }

  addDriver(driverList: Driver[], driver: Driver) {
    localStorage.setItem('drivers', JSON.stringify(driverList.concat(driver)));
    return this.getAllDrivers();
  }

}
