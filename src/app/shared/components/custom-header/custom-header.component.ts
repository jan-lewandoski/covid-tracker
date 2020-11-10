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
import {
  getIsMobileView,
  getIsSearchFieldEnabled,
} from '../../state/shared-components.reducer';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {
  isSearchFieldEnabled: boolean;
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
    this.store.select(getIsSearchFieldEnabled).subscribe((isEnabled) => {
      this.isSearchFieldEnabled = isEnabled;
    });
    this.store.select(getIsMobileView).subscribe((isMobileView) => {
      this.isMobileView = isMobileView;
    });
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
}
