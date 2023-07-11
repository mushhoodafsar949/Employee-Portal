import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ProfileVerificationComponent } from './profile-verification/profile-verification.component';
import { ViewEmployeeProfileComponent } from './view-employee-profile/view-employee-profile.component';

const routes: Routes = [
  {
    path: 'Holidays', component: HolidaysComponent
  },
  { path: 'NewEmployee', component: NewEmployeeComponent },
  { path: 'ProfileVerification', component: ProfileVerificationComponent },
  { path: 'ViewEmployeeProfile', component: ViewEmployeeProfileComponent }

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class manageEmployeesRoutingModule { }