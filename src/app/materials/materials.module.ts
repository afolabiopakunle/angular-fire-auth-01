import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  exports: [
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
  ]
})
export class MaterialsModule { }
