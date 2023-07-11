
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/AngularMaterial/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import {SidebarModule } from 'ng-cdbangular';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    SidebarModule,


  ],
  exports: [
    AngularMaterialModule,
    RouterModule,
    SidebarModule,
  ]
})
export class SharedModule { }
