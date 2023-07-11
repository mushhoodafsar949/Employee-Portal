import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SharedModule } from '../shared/shared.module';
      

@NgModule({
  declarations: [
    BaseComponent,
    ErrorPageComponent,
    FooterComponent,
    LayoutComponent,
    NavbarComponent,
    TopnavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
