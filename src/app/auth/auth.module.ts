import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { OtpComponent } from './otp/otp.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    LoginComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgOtpInputModule
  ],
  exports: [

  ]
})
export class AuthModule { }
