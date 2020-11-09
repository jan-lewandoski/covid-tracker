import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as SidebarActions from './sidebar.actions';

export interface SidebarState {
  isSidebarOpened: boolean;
}

const initialState = {
  isSidebarOpened: false,
};

const getSidebarFeatureState = createFeatureSelector<SidebarState>('sidebar');

export const getIsSidebarOpened = createSelector(
  getSidebarFeatureState,
  (state) => state.isSidebarOpened
);

export const sidebarReducer = createReducer<SidebarState>(
  initialState,
  on(
    SidebarActions.toggleSidebar,
    (state): SidebarState => {
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened,
      };
    }
  )
);
