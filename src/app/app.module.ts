import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MemeComponent } from "./meme/meme.component";
import { StoreModule } from "@ngrx/store";

import { HttpClientModule } from "@angular/common/http";
import { memeReducer } from "./state/meme.reducer";
import { collectionReducer } from "./state/collection.reducer";
import { MemeCollectionComponent } from "./meme-collection/meme-collection.component";

@NgModule({
  declarations: [AppComponent, MemeComponent, MemeCollectionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ meme: memeReducer, collection: collectionReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
