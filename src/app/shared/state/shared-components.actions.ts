import { createAction, props } from '@ngrx/store';

export const toggleSidebar = createAction('[Shared Components] Toggle Sidebar');
export const hideSidebar = createAction('[Shared Components] Hide Sidebar');
export const setCurrentSearchTerm = createAction(
  '[Shared Components] Set Current Search Term',
  props<{ searchTerm: string }>()
);
export const toggleSearchField = createAction(
  '[Shared Components] Toggle Search Field'
);
export const enableLoading = createAction('[Shared Components] Enable Loading');
export const disableLoading = createAction(
  '[Shared Components] Disable Loading'
);
export const enableMobileView = createAction(
  '[Shared Components] Enable Mobile View'
);
export const disableMobileView = createAction(
  '[Shared Components] Disable Mobile View'
);
export const disableSearchField = createAction(
  '[Shared Components] Disable Search Field'
);
