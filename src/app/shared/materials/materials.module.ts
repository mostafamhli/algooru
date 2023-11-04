import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const materialsArray = [
  MatPaginatorModule,
  MatIconModule,
  MatProgressBarModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, [...materialsArray]],
  exports: [[...materialsArray]],
})
export class MaterialsModule {}
