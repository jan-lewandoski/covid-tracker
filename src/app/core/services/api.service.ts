import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, HistoricalData } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly NOVEL_COVID_API: string = 'https://corona.lmao.ninja/v2';

  constructor(private http: HttpClient) {}

  public getCountriesData(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.NOVEL_COVID_API}/countries`);
  }

  getHistoricalData(countryName: string): Observable<HistoricalData> {
    return this.http.get<HistoricalData>(
      `${this.NOVEL_COVID_API}/historical/${countryName}`
    );
  }
}
