import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from 'src/app/state/app.state';
import * as SharedComponentsActions from '../../state/shared-components.actions';
import { getIsSearchFieldEnabled } from '../../state/shared-components.reducer';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit, OnDestroy {
  isSearchFieldEnabled: boolean;
  subscribers = new Subscription();
  isMobileView: boolean;
  _searchTerm: string;
  readonly MOBILE_WIDTH: number = 600;

  @Input() set searchTerm(term: string) {
    this.store.dispatch(
      SharedComponentsActions.setCurrentSidebarOption({ searchTerm: term })
    );
  }

  get searchTerm() {
    return this._searchTerm;
  }

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscribers.add(
      this.store.select(getIsSearchFieldEnabled).subscribe((isEnabled) => {
        this.isSearchFieldEnabled = isEnabled;
      })
    );
  }

  toggleSidebar() {
    this.store.dispatch(SharedComponentsActions.toggleSidebar());
  }

  toggleSearchField() {
    this.store.dispatch(SharedComponentsActions.toggleSearchField());
  }

  shouldHideTitle(): boolean {
    return this.isMobileView && this.isSearchFieldEnabled;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobileView = window.innerWidth < this.MOBILE_WIDTH;
  }

  ngOnDestroy(): void {
    this.subscribers.unsubscribe();
  }
}
