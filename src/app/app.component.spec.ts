import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MemeComponent } from "./meme/meme.component";
import { MemeCollectionComponent } from "./meme-collection/meme-collection.component";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { memeReducer } from "./state/meme.reducer";
import { collectionReducer } from "./state/collection.reducer";
import { MemeService } from "./service/meme.service";
import { HomeComponent } from "./home/home.component";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let store: MockStore;
  let memeService: MemeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
          meme: memeReducer,
          collection: collectionReducer,
        }),
      ],
      declarations: [
        AppComponent,
        MemeComponent,
        MemeCollectionComponent,
        HomeComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    memeService = TestBed.inject(MemeService);
    fixture.detectChanges();
  });

  test("should create the app", () => {
    expect(app).toBeTruthy();
  });

  test(`should have as title 'Meme-T*nder'`, () => {
    expect(app.title).toEqual("Meme-T*nder");
  });
});
