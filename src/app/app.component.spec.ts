import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MemeComponent } from "./meme/meme.component";
import { MemeCollectionComponent } from "./meme-collection/meme-collection.component";
import { MockState, MockStore, provideMockStore } from "@ngrx/store/testing";
import { memeReducer } from "./state/meme.reducer";
import { collectionReducer } from "./state/collection.reducer";
import { Component } from "@angular/core";
import { MemeService } from "./service/meme.service";

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
      declarations: [AppComponent, MemeComponent, MemeCollectionComponent],
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

  test("should render title", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain("Meme-T*nder");
  });

  test("fetch meme method should dispatch getMeme", () => {
    app.fetchMeme("");
    expect(memeService.getMeme().subscribe).toHaveBeenCalled;
  });
});
