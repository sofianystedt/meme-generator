import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MemeCollectionComponent } from "./meme-collection.component";

describe("MemeCollectionComponent", () => {
  let component: MemeCollectionComponent;
  let fixture: ComponentFixture<MemeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemeCollectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
