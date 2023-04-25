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
      imports: [],
      declarations: [MemeCollectionComponent],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MemeCollectionComponent);
    component = fixture.componentInstance;

    mockMemeCollectionSelector = store.overrideSelector(selectMemeCollection, [
      {
        id: "firstMemeId",
        url: "memeUrl",
        title: "memeTitle",
      },
    ]);
    fixture.detectChanges();
    jest.spyOn(store, "dispatch");
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });

  test("remove method should dispatch remove action", () => {
    component.onRemove("firstMemeId");
    expect(store.dispatch).toHaveBeenCalledWith(
      MemeActions.removeMeme({ memeId: "firstMemeId" })
    );
  });

  test("should update the UI when the store changes", () => {
    mockMemeCollectionSelector.setResult([
      {
        id: "firstMemeId",
        url: "memeUrl",
        title: "memeTitle",
      },
      {
        id: "secondMemeId",
        url: "memeUrl2",
        title: "memeTitle2",
      },
    ]);

    store.refreshState();
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css(".meme-collections")).length
    ).toBe(2);
  });
});
