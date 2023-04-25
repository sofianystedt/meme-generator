import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemeComponent } from "./meme.component";
import { StoreModule } from "@ngrx/store";
import { provideMockStore } from "@ngrx/store/testing";

describe("MemeComponent", () => {
  let component: MemeComponent;
  let fixture: ComponentFixture<MemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(provideMockStore)],
      declarations: [MemeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });
});
