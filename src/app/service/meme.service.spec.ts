import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemeService } from "./meme.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Meme } from "../meme/meme.model";
import { MemeApiResponse } from "../api/meme-api.model";
import { of } from "rxjs";

describe("MemeService", () => {
  let service: MemeService;
  let httpClientSpy: any;

  beforeEach(async () => {
    httpClientSpy = {
      get: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MemeService],
    }).compileComponents();
    service = new MemeService(httpClientSpy);
  });

  test("should create", () => {
    expect(service).toBeTruthy();
  });

  test("should test getMeme", () => {
    const res: Meme = { id: "hello", url: "string", title: "string" };
    const url = "https://meme-api.com/gimme/wholesomememes";
    jest.spyOn(httpClientSpy, "get").mockReturnValue(of(res));
    service.getMeme();
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });
});
