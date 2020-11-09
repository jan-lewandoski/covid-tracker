import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsSidebarOpened } from './shared/state/sidebar.reducer';
import { State } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isSidebarOpened$ = new Observable<boolean>();
  isMobileView: boolean;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isSidebarOpened$ = this.store.select(getIsSidebarOpened);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobileView = window.innerWidth < 500;
  }
}
