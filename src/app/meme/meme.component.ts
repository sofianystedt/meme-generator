import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Meme } from "./meme.model";
import { Store } from "@ngrx/store";
import { selectMemes } from "../state/meme.selectors";
import { MemeActions } from "../state/meme.actions";

@Component({
  selector: "app-meme",
  templateUrl: "./meme.component.html",
  styleUrls: ["./meme.component.scss"],
})
export class MemeComponent {
  meme: Meme | undefined = undefined;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectMemes)
      .subscribe(
        (memes) => (this.meme = memes.length > 0 ? memes[0] : undefined)
      );
  }

  onLike(memeId: string | undefined) {
    if (!memeId) {
      return;
    }
    this.store.dispatch(MemeActions.likeMeme({ memeId }));
    this.fetch.emit();
  }

  @Output() fetch = new EventEmitter<string>();
}
