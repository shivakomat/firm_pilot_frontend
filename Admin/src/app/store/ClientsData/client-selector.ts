import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientsState } from './client.reducer';

export const selectClientsState = createFeatureSelector<ClientsState>('Clientslist');

export const selectClientsData = createSelector(
  selectClientsState,
  (state: ClientsState) => state.clients
);

export const selectClientsLoading = createSelector(
  selectClientsState,
  (state: ClientsState) => state.loading
);

export const selectClientsError = createSelector(
  selectClientsState,
  (state: ClientsState) => state.error
);
