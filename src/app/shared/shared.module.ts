import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './materials/materials.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [CommonModule, MaterialsModule],
  exports: [
    MaterialsModule,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
