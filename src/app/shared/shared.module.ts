import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomCountryCardComponent } from './components/custom-country-card/custom-country-card.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [CustomHeaderComponent, CustomCountryCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [CustomHeaderComponent, CustomCountryCardComponent],
})
export class SharedModule {}
