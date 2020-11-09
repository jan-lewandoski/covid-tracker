import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CustomHeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [CustomHeaderComponent],
})
export class SharedModule {}
