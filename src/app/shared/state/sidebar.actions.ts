import { createAction, props } from '@ngrx/store';

export const toggleSidebar = createAction('[Sidebar] Toggle Sidebar');
export const hideSidebar = createAction('[Sidebar] Hide Sidebar');
export const setCurrentSidebarOption = createAction(
  '[Sidebar] Set Current Search Term',
  props<{ searchTerm: string }>()
);
