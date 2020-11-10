export interface Country {
  country: string;
  continent: string;
  countryInfo: { flag: string };
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
}
