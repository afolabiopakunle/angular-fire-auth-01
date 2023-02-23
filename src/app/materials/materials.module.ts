import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
  ]
})
export class MaterialsModule { }
