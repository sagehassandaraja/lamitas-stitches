import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatStepperModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSnackBarModule,
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatStepperModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSnackBarModule,
  ]
})
export class MaterialModule { }
