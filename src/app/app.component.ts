import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getIsLoading,
  getIsMobileView,
  getIsSearchFieldEnabled,
  getIsSidebarOpened,
} from './shared/state/shared-components.reducer';
import { State } from './state/app.state';
import * as SharedComponentsActions from 'src/app/shared/state/shared-components.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly MOBILE_WIDTH: number = 600;

  isSidebarOpened$ = new Observable<boolean>();
  isLoading$ = new Observable<boolean>();
  isMobileView$ = new Observable<boolean>();

  readonly options: string[] = [
    'World',
    'Europe',
    'North America',
    'South America',
    'Australia/Oceania',
    'Africa',
    'Asia',
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    if (environment.production) {
      this.showAppInfo();
    }
    if (this.isMobileView()) {
      this.enableMobileView();
    }
    this.isSidebarOpened$ = this.store.select(getIsSidebarOpened);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isMobileView$ = this.store.select(getIsMobileView);
  }

  toggleSidebar() {
    this.store.dispatch(SharedComponentsActions.toggleSidebar());
  }

  hideSidebar() {
    this.store.dispatch(SharedComponentsActions.hideSidebar());
  }

  changeOption(option: string) {
    if (option === 'World') option = '';
    this.store.dispatch(
      SharedComponentsActions.setCurrentSearchTerm({ searchTerm: option })
    );
    this.store.dispatch(SharedComponentsActions.disableSearchField());
    if (this.isMobileView()) this.hideSidebar();
  }

  isMobileView(): boolean {
    return window.innerWidth < this.MOBILE_WIDTH;
  }

  enableMobileView() {
    this.store.dispatch(SharedComponentsActions.enableMobileView());
  }

  disableMobileView() {
    this.store.dispatch(SharedComponentsActions.disableMobileView());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobileView() ? this.enableMobileView() : this.disableMobileView();
  }

  private showAppInfo() {
    console.log('+-------------------+');
    console.log('|  👋 Production!   |');
    console.log('|     ver 1.0.0     |');
    console.log('+-------------------+');
  }
}
