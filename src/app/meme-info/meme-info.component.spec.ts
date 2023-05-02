import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MemeInfoComponent } from "./meme-info.component";
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { Meme } from "../meme/meme.model";
import { HomeComponent } from "../home/home.component";
import { AppRoutingModule } from "../app-routing.module";

describe("MemeInfoComponent", () => {
  let component: MemeInfoComponent;
  let fixture: ComponentFixture<MemeInfoComponent>;
  let store: MockStore<Meme>;

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
      declarations: [MemeInfoComponent],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MemeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });
});
