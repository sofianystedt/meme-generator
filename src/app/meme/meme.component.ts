import { Component, EventEmitter, Output } from "@angular/core";
import { Meme } from "./meme.model";
import { Store } from "@ngrx/store";
import {
  selectCollectionState,
  selectMeme,
  selectMemeCollection,
} from "../state/meme.selectors";
import { MemeActions, MemeApiActions } from "../state/meme.actions";

@Component({
  selector: "app-meme",
  templateUrl: "./meme.component.html",
  styleUrls: ["./meme.component.scss"],
})
export class MemeComponent {
  meme: Meme | undefined = undefined;
  memes: readonly Meme[] | undefined = undefined;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectMeme).subscribe((memes) => {
      this.meme = memes.length > 0 ? memes[0] : undefined;
      this.memes = memes;
    });
    this.onDeny();
  }

  onLike(memeId: number | undefined) {
    if (!memeId) {
      return;
    }
    this.store.dispatch(MemeActions.likeMeme({ memeId }));
    this.store.dispatch(
      MemeApiActions.fetchMeme({ ids: this.memes?.map((m) => m.id) ?? [] })
    );
  }
  onDeny() {
    this.store.dispatch(
      MemeApiActions.fetchMeme({ ids: this.memes?.map((m) => m.id) ?? [] })
    );
  }
}
