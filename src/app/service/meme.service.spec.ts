import { TestBed } from "@angular/core/testing";
import { MemeService } from "./meme.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Meme } from "../meme/meme.model";
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
    const res: Meme = {
      id: 23,
      url: "string",
      title: "string",
      postLink: "memelink",
      subreddit: "postUrl",
    };
    const url = "https://meme-api.com/gimme/wholesomememes";
    jest.spyOn(httpClientSpy, "get").mockReturnValue(of(res));
    service.getMeme();
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });
});
