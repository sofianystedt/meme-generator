import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemeComponent } from "./meme.component";
import { DefaultProjectorFn, MemoizedSelector, StoreModule } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { memeReducer } from "../state/meme.reducer";
import { collectionReducer } from "../state/collection.reducer";
import { By } from "@angular/platform-browser";
import { Meme } from "./meme.model";
import { selectMeme } from "../state/meme.selectors";
import { MemeActions } from "../state/meme.actions";

describe("MemeComponent", () => {
  let component: MemeComponent;
  let fixture: ComponentFixture<MemeComponent>;
  let store: MockStore<Meme>;
  let mockMemeSelector: MemoizedSelector<
    any,
    readonly Meme[],
    DefaultProjectorFn<readonly Meme[]>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [],
      declarations: [MemeComponent],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MemeComponent);
    component = fixture.componentInstance;

    mockMemeSelector = store.overrideSelector(selectMeme, [
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

  test("like method should dispatch likeMeme", () => {
    component.onLike("firstMemeId");
    expect(store.dispatch).toHaveBeenCalledWith(
      MemeActions.likeMeme({ memeId: "firstMemeId" })
    );
  });
});
