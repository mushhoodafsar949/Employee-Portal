import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { OtpComponent } from './auth/otp/otp.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './Guards/auth.guard';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './manage-employees/holidays/holidays.component';

const appRoutes: Routes = [
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'otp', component:OtpComponent, canActivate:[AuthGuard]},
  {
    path:'', component: LayoutComponent,  canActivate: [AuthGuard],  canActivateChild: [AuthGuard], children:[
      { path: 'ManageEmployees', 
      loadChildren: () => import('./manage-employees/manage-employees.module').then(m => m.ManageEmployeesModule) },
    
    ]
  },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
