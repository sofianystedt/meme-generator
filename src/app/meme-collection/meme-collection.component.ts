import { Component } from "@angular/core";
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

  onRemove(memeId: number) {
    this.store.dispatch(MemeActions.removeMeme({ memeId }));
  }
}
