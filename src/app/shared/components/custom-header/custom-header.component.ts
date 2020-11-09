import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import * as SidebarActions from '../../state/sidebar.actions';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.store.dispatch(SidebarActions.toggleSidebar());
  }
}
