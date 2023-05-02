import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemeCollectionComponent } from "./meme-collection.component";
import { DefaultProjectorFn, MemoizedSelector, StoreModule } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { memeReducer } from "../state/meme.reducer";
import { collectionReducer } from "../state/collection.reducer";
import { Meme } from "../meme/meme.model";
import { selectMeme, selectMemeCollection } from "../state/meme.selectors";
import { MemeActions } from "../state/meme.actions";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { HomeComponent } from "../home/home.component";
import { MemeInfoComponent } from "../meme-info/meme-info.component";

describe("MemeCollectionComponent", () => {
  let component: MemeCollectionComponent;
  let fixture: ComponentFixture<MemeCollectionComponent>;
  let store: MockStore<Meme>;
  let mockMemeCollectionSelector: MemoizedSelector<
    any,
    Meme[],
    DefaultProjectorFn<Meme[]>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [
        RouterTestingModule.withRoutes([
          { path: "", component: HomeComponent },
          { path: "home", component: HomeComponent },
          { path: "meme-info", component: MemeInfoComponent },
        ]),
      ],
      declarations: [MemeCollectionComponent],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MemeCollectionComponent);
    component = fixture.componentInstance;

    mockMemeCollectionSelector = store.overrideSelector(selectMemeCollection, [
      {
        id: 1,
        url: "memeUrl",
        title: "memeTitle",
        postLink: "memelink",
        subreddit: "postUrl",
      },
    ]);
    fixture.detectChanges();
    jest.spyOn(store, "dispatch");
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });

  test("remove method should dispatch remove action", () => {
    component.onRemove(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      MemeActions.removeMeme({ memeId: 1 })
    );
  });

  test("should update the UI when the store changes", () => {
    mockMemeCollectionSelector.setResult([
      {
        id: 1,
        url: "memeUrl",
        title: "memeTitle",
        postLink: "memelink",
        subreddit: "postUrl",
      },
      {
        id: 2,
        url: "memeUrl2",
        title: "memeTitle2",
        postLink: "memelink",
        subreddit: "postUrl",
      },
    ]);

    store.refreshState();
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css(".meme-collections")).length
    ).toBe(2);
  });
});
