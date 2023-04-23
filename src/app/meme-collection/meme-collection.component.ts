import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Meme } from "../meme/meme.model";
import { Store } from "@ngrx/store";
import { selectMemeCollection } from "../state/meme.selectors";
import { MemeActions } from "../state/meme.actions";

@Component({
  selector: "app-meme-collection",
  templateUrl: "./meme-collection.component.html",
  styleUrls: ["./meme-collection.component.scss"],
})
export class MemeCollectionComponent {
  memeCollection$ = this.store.select(selectMemeCollection);
  constructor(private store: Store) {}

  onRemove(memeId: string) {
    this.store.dispatch(MemeActions.removeMeme({ memeId }));
  }
}
