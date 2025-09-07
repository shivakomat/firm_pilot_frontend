import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { CrudService } from 'src/app/core/services/crud.service';
import { fetchClientsData, fetchClientsSuccess, fetchClientsFail } from './client.actions';

@Injectable()
export class ClientsEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchClientsData),
      mergeMap(() =>
        this.api.fetchData('/businesses/clients/1').pipe(
          map((clients) => fetchClientsSuccess({ clients })),
          catchError((error) => of(fetchClientsFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: CrudService) {}
}
