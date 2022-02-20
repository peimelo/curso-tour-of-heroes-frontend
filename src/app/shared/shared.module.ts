import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

const SHARED_COMPONENTS = [HeroSearchComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [SHARED_COMPONENTS],
})
export class SharedModule {}
