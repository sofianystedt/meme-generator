import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { MemeService } from "../service/meme.service";
import { MemeApiActions } from "./meme.actions";
import { Meme } from "../meme/meme.model";

@Injectable()
export class MemeEffects {
  loadMemes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemeApiActions.fetchMeme.type),
      exhaustMap((action: any) =>
        this.memeService.getMeme().pipe(
          tap((meme) => console.log("meme", meme)),
          map((meme) =>
            (action.ids as Meme["id"][]).findIndex((id) => id == meme.id) === -1
              ? MemeApiActions.retrievedMeme({ meme })
              : MemeApiActions.fetchMeme({ ids: action.ids })
          ),
          catchError((error) =>
            of(MemeApiActions.fetchMeme({ ids: action.ids }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private memeService: MemeService) {}
}
