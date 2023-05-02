import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemeComponent } from "./meme.component";
import { DefaultProjectorFn, MemoizedSelector, StoreModule } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { Meme } from "./meme.model";
import { selectMeme } from "../state/meme.selectors";
import { MemeActions } from "../state/meme.actions";
import { HomeComponent } from "../home/home.component";

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

  test("like method should dispatch likeMeme", () => {
    component.onLike(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      MemeActions.likeMeme({ memeId: 1 })
    );
  });
});
