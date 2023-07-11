import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ProfileVerificationComponent } from './profile-verification/profile-verification.component';
import { ViewEmployeeProfileComponent } from './view-employee-profile/view-employee-profile.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { SharedModule } from '../shared/shared.module';
import { manageEmployeesRoutingModule } from './manage-employees-routing.module';

@NgModule({
  declarations: [
    NewEmployeeComponent,
    ProfileVerificationComponent,
    ViewEmployeeProfileComponent,
    HolidaysComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    manageEmployeesRoutingModule
  ]
})
export class ManageEmployeesModule { }
