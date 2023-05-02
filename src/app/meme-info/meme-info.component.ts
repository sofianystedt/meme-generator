import { Component } from "@angular/core";
import { selectMemeCollection } from "../state/meme.selectors";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Meme } from "../meme/meme.model";

@Component({
  selector: "app-meme-info",
  templateUrl: "./meme-info.component.html",
  styleUrls: ["./meme-info.component.scss"],
})
export class MemeInfoComponent {
  meme: Meme | undefined = undefined;
  id: number = 56;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
      this.store.select(selectMemeCollection).subscribe((memes) => {
        this.meme = memes.find((meme) => meme.id == this.id);
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
