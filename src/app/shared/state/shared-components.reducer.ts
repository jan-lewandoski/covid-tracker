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
  isLoading: boolean;
}

const initialState = {
  isSidebarOpened: false,
  searchTerm: null,
  isSearchFieldEnabled: false,
  isLoading: true,
};

const getSharedComponentsFeatureState = createFeatureSelector<
  SharedComponentsState
>('sharedComponents');

export const getIsSidebarOpened = createSelector(
  getSharedComponentsFeatureState,
  (state) => state.isSidebarOpened
);

export const getSearchTerm = createSelector(
  getSharedComponentsFeatureState,
  (state) => state.searchTerm
);

export const getIsSearchFieldEnabled = createSelector(
  getSharedComponentsFeatureState,
  (state) => state.isSearchFieldEnabled
);

export const getIsLoading = createSelector(
  getSharedComponentsFeatureState,
  (state) => state.isLoading
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
  ),
  on(
    SharedComponentsActions.enableLoading,
    (state): SharedComponentsState => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    SharedComponentsActions.disableLoading,
    (state): SharedComponentsState => {
      return {
        ...state,
        isLoading: false,
      };
    }
  )
);
