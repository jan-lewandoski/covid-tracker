import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomCountryCardComponent } from './components/custom-country-card/custom-country-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { sharedComponentsReducer } from './state/shared-components.reducer';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomSpinnerComponent } from './components/custom-spinner/custom-spinner.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomExpansionPanelComponent } from './components/custom-expansion-panel/custom-expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomCountryCardComponent,
    CustomInputComponent,
    CustomSpinnerComponent,
    CustomExpansionPanelComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatExpansionModule,
    StoreModule.forFeature('sharedComponents', sharedComponentsReducer),
  ],
  exports: [
    CustomHeaderComponent,
    CustomCountryCardComponent,
    MatSidenavModule,
    MatListModule,
    CustomInputComponent,
    FormsModule,
    ReactiveFormsModule,
    CustomSpinnerComponent,
    MatDialogModule,
    MatIconModule,
    CustomExpansionPanelComponent,
  ],
})
export class SharedModule {}
