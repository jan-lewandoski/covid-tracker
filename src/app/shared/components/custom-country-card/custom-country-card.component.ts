import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/core/models';

@Component({
  selector: 'custom-country-card',
  templateUrl: './custom-country-card.component.html',
  styleUrls: ['./custom-country-card.component.scss'],
})
export class CustomCountryCardComponent implements OnInit {
  @Input() country: Country;
  @Output() onCountryClick = new EventEmitter<Country>();

  constructor() {}

  ngOnInit(): void {}

  countryClicked() {
    this.onCountryClick.emit(this.country);
  }
}
