import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemeCollectionComponent } from "./meme-collection.component";
import { StoreModule } from "@ngrx/store";
import { provideMockStore } from "@ngrx/store/testing";

describe("MemeCollectionComponent", () => {
  let component: MemeCollectionComponent;
  let fixture: ComponentFixture<MemeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(provideMockStore)],
      declarations: [MemeCollectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });
});
