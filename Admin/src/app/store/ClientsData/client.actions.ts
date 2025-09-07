import { createAction, props } from '@ngrx/store';

export interface Client {
  id: number;
  name: string;
  email: string;
  // extend as per real API
}

export const fetchClientsData = createAction('[Clients] fetch');
export const fetchClientsSuccess = createAction('[Clients] fetch success', props<{ clients: Client[] }>());
export const fetchClientsFail = createAction('[Clients] fetch fail', props<{ error: any }>());
