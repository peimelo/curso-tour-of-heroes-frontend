import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

const COMPONENTS = [HeroSearchComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS],
})
export class SharedModule {}
