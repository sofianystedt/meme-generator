import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { MemeService } from "../service/meme.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { MemeComponent } from "../meme/meme.component";
import { Meme } from "../meme/meme.model";
import { MemeCollectionComponent } from "../meme-collection/meme-collection.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let store: MockStore<Meme>;
  let fixture: ComponentFixture<HomeComponent>;
  let memeService: MemeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent, MemeComponent, MemeCollectionComponent],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    memeService = TestBed.inject(MemeService);
    fixture.detectChanges();
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });

  test("should render title", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain("Meme-T*nder");
  });

  test("fetch meme method should dispatch getMeme", () => {
    component.fetchMeme("");
    expect(memeService.getMeme().subscribe).toHaveBeenCalled;
  });
});
