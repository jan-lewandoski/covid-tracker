import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomCountryCardComponent } from './components/custom-country-card/custom-country-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';
import { sidebarReducer } from './state/sidebar.reducer';

@NgModule({
  declarations: [CustomHeaderComponent, CustomCountryCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    StoreModule.forFeature('sidebar', sidebarReducer),
  ],
  exports: [
    CustomHeaderComponent,
    CustomCountryCardComponent,
    MatSidenavModule,
  ],
})
export class SharedModule {}
