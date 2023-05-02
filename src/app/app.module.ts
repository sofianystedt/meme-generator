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
import { MemeInfoComponent } from "./meme-info/meme-info.component";
import { HomeComponent } from "./home/home.component";
import { EffectsModule } from "@ngrx/effects";
import { MemeEffects } from "./state/meme.effects";

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    MemeCollectionComponent,
    MemeInfoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ meme: memeReducer, collection: collectionReducer }),
    EffectsModule.forRoot(MemeEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
