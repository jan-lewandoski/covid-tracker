import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as SidebarActions from './sidebar.actions';

export interface SidebarState {
  isSidebarOpened: boolean;
  searchTerm: string;
}

const initialState = {
  isSidebarOpened: false,
  searchTerm: null,
};

const getSidebarFeatureState = createFeatureSelector<SidebarState>('sidebar');

export const getIsSidebarOpened = createSelector(
  getSidebarFeatureState,
  (state) => state.isSidebarOpened
);

export const getSearchTerm = createSelector(
  getSidebarFeatureState,
  (state) => state.searchTerm
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
  ),
  on(
    SidebarActions.hideSidebar,
    (state): SidebarState => {
      return {
        ...state,
        isSidebarOpened: false,
      };
    }
  ),
  on(
    SidebarActions.setCurrentSidebarOption,
    (state, action): SidebarState => {
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    }
  )
);
