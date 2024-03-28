import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    SelectButtonModule,
    ColorPickerModule,
    FormsModule
  ]
})
export class NgprimeModule { }
