import { Component, Input, OnInit } from '@angular/core';
import { ImportState } from '@ngrx/store-devtools/src/actions';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrls: ['./custom-spinner.component.scss'],
})
export class CustomSpinnerComponent implements OnInit {
  @Input() isLoading$: Observable<boolean>;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.isLoading$.subscribe((isLoading) => {
      if (isLoading) this.spinner.show();
      else this.spinner.hide();
    });
  }
}
