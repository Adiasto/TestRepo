import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import { DriverRoutingModule } from './driver-routing.module';
import { DriverApisService } from './driver-apis.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DriversComponent],
  imports: [
    CommonModule,
    DriverRoutingModule, ReactiveFormsModule, FormsModule
  ]
})
export class DriversModule { }
