import { Component } from "@angular/core";
import { MemeService } from "./meme/meme.service";
import { MemeApiActions } from "./state/meme.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Meme-T*nder";

  fetchMeme(_: any) {
    this.memeService
      .getMeme()
      .subscribe(
        (meme) =>
          meme != null &&
          this.store.dispatch(MemeApiActions.retrievedMeme({ meme: meme }))
      );
  }

  constructor(private memeService: MemeService, private store: Store) {}
  ngOnInit() {
    this.fetchMeme({});
  }
}
