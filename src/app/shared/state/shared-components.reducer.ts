import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as SharedComponentsActions from './shared-components.actions';

export interface SharedComponentsState {
  isSidebarOpened: boolean;
  searchTerm: string;
  isSearchFieldEnabled: boolean;
}

const initialState = {
  isSidebarOpened: false,
  searchTerm: null,
  isSearchFieldEnabled: false,
};

const getSidebarFeatureState = createFeatureSelector<SharedComponentsState>(
  'sharedComponents'
);

export const getIsSidebarOpened = createSelector(
  getSidebarFeatureState,
  (state) => state.isSidebarOpened
);

export const getSearchTerm = createSelector(
  getSidebarFeatureState,
  (state) => state.searchTerm
);

export const getIsSearchFieldEnabled = createSelector(
  getSidebarFeatureState,
  (state) => state.isSearchFieldEnabled
);

export const sharedComponentsReducer = createReducer<SharedComponentsState>(
  initialState,
  on(
    SharedComponentsActions.toggleSidebar,
    (state): SharedComponentsState => {
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened,
      };
    }
  ),
  on(
    SharedComponentsActions.hideSidebar,
    (state): SharedComponentsState => {
      return {
        ...state,
        isSidebarOpened: false,
      };
    }
  ),
  on(
    SharedComponentsActions.setCurrentSidebarOption,
    (state, action): SharedComponentsState => {
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    }
  ),
  on(
    SharedComponentsActions.toggleSearchField,
    (state): SharedComponentsState => {
      return {
        ...state,
        isSearchFieldEnabled: !state.isSearchFieldEnabled,
      };
    }
  )
);
