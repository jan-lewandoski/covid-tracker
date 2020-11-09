import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countriesData$ = new Observable<Country[]>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.countriesData$ = this.apiService
      .getCountriesData()
      .pipe(
        map((countries: Country[]) =>
          countries.sort((a, b) => b.todayCases - a.todayCases)
        )
      );
  }
}
