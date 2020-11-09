import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsSidebarOpened } from './shared/state/sidebar.reducer';
import { State } from './state/app.state';
import * as DashboardActions from 'src/app/shared/state/sidebar.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly MOBILE_WIDTH: number = 500;

  isSidebarOpened$ = new Observable<boolean>();
  isMobileView: boolean = window.innerWidth < this.MOBILE_WIDTH;

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
    this.isSidebarOpened$ = this.store.select(getIsSidebarOpened);
  }

  toggleSidebar() {
    this.store.dispatch(DashboardActions.toggleSidebar());
  }

  hideSidebar() {
    this.store.dispatch(DashboardActions.hideSidebar());
  }

  changeOption(option: string) {
    if (option === 'World') option = '';
    this.store.dispatch(
      DashboardActions.setCurrentSidebarOption({ searchTerm: option })
    );
    if (this.isMobileView) this.hideSidebar();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobileView = window.innerWidth < this.MOBILE_WIDTH;
  }
}
