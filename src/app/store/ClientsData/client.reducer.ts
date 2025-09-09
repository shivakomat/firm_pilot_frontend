import { Action, createReducer, on } from '@ngrx/store';
import { fetchClientsData, fetchClientsSuccess, fetchClientsFail, Client } from './client.actions';

export interface ClientsState {
  clients: Client[];
  loading: boolean;
  error: any;
}

export const initialState: ClientsState = {
  clients: [],
  loading: false,
  error: null,
};

const _clientsReducer = createReducer(
  initialState,
  on(fetchClientsData, (state) => ({ ...state, loading: true, error: null })),
  on(fetchClientsSuccess, (state, { clients }) => ({ ...state, clients, loading: false })),
  on(fetchClientsFail, (state, { error }) => ({ ...state, error, loading: false }))
);

export function clientsReducer(state: ClientsState | undefined, action: Action) {
  return _clientsReducer(state, action);
}
