import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getSearchTerm } from 'src/app/shared/state/shared-components.reducer';
import {
  disableLoading,
  enableLoading,
} from 'src/app/shared/state/shared-components.actions';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countriesData$ = new Observable<Country[]>();
  searchQuery$ = new Observable<string>();

  constructor(private apiService: ApiService, private store: Store<State>) {}

  ngOnInit(): void {
    this.countriesData$ = this.apiService.getCountriesData().pipe(
      tap(() => this.store.dispatch(enableLoading())),
      map((countries: Country[]) =>
        countries.sort((a, b) => b.todayCases - a.todayCases)
      ),
      tap(() => this.store.dispatch(disableLoading()))
    );
    this.searchQuery$ = this.store.select(getSearchTerm);
  }
}
