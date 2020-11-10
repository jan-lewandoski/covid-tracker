import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from '../core/core.module';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';

@NgModule({
  declarations: [CountriesComponent, CountryDetailsComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, CoreModule],
})
export class DashboardModule {}
