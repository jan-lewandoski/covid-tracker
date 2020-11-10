import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/core/models';
import { Chart } from 'chart.js';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getIsMobileView } from 'src/app/shared/state/shared-components.reducer';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  @ViewChild('dailyInfectedCanvas', { static: true })
  dailyInfectedCanvas: ElementRef;
  dailyInfectedChart: Chart;
  isMobileView: boolean;
  numOfTotalInfected: number[] = [];
  numOfDailyInfected: number[] = [];
  dates: string[] = [];
  datesOfDailyInfected: string[] = [];

  constructor(
    private store: Store<State>,
    private apiSerivce: ApiService,
    public dialogRef: MatDialogRef<CountryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country
  ) {}

  ngOnInit(): void {
    this.store.select(getIsMobileView).subscribe((isMobileView) => {
      this.isMobileView = isMobileView;
    });
    this.loadHistoricalData();
  }

  private loadHistoricalData() {
    this.apiSerivce.getHistoricalData(this.data.country).subscribe((res) => {
      let data = res.timeline.cases;
      Object.keys(data).forEach((key) => {
        this.dates.push(key);
        this.numOfTotalInfected.push(data[key]);
      });

      this.datesOfDailyInfected = this.dates.slice(1);
      this.numOfDailyInfected = this.getNumOfDailyInfected(
        this.numOfTotalInfected
      );

      this.dailyInfectedChart = this.loadChart(
        this.datesOfDailyInfected,
        this.numOfDailyInfected,
        this.dailyInfectedCanvas
      );
    });
  }

  private getNumOfDailyInfected(totalInfected: number[]): number[] {
    let result: number[] = [];
    for (let i = 1; i < this.numOfTotalInfected.length; i++) {
      result[i - 1] = totalInfected[i] - totalInfected[i - 1];
    }
    return result;
  }

  loadChart(dates: string[], values: number[], chart: ElementRef): Chart {
    return new Chart(chart.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            data: values,
            borderColor: '#3cba9f',
            fill: true,
          },
        ],
      },
      options: {
        maintainAspectRatio: this.isMobileView,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
              display: true,
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
              display: true,
            },
          ],
        },
      },
    });
  }
}
