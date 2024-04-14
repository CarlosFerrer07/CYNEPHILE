import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    CardModule,
    SelectButtonModule,
    ColorPickerModule,
    FormsModule,
    CarouselModule,
    TagModule,
    PanelModule,
    PaginatorModule,
    DialogModule,
    ProgressSpinnerModule,
    DividerModule,
    InputTextModule,
    PasswordModule,
  ],
})
export class NgprimeModule {}
