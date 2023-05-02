import { Component } from "@angular/core";
import { MemeService } from "../service/meme.service";
import { MemeApiActions } from "../state/meme.actions";
import { Store } from "@ngrx/store";
import { selectMemeCollection } from "../state/meme.selectors";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  title = "Meme-T*nder";

  constructor(private memeService: MemeService, private store: Store) {}
  ngOnInit() {}
}
