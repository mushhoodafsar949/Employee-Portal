import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Loginmodel } from '../Model/loginmodel';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthRoutingModule } from '../auth-routing.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginViewModel: Loginmodel;
  constructor(private router: Router,
    private authService:AuthService) {
    this.loginViewModel = new Loginmodel();
  }


  ngOnInit() {
    this.InitializeForm();
  }

  InitializeForm(): any {
    this.loginForm = new FormGroup({
      loginEmail: new FormControl('', [Validators.required]),
      loginPassword: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(8)]),
    });
  }

  onClick(){
    // const val = this.loginForm.value;

    // if (val.loginEmail && val.loginPassword) {
    //   this.authService.isvalidlogin(val.loginEmail, val.loginPassword);
    //   let check=this.authService.isAuthenticated();
    //   if(check==true){
    //     this.router.navigate(['/otp']);
    //   }
    //   else{
    //     this.router.navigate(['/Layout']);
    //   }
   // }
  }
 

}

