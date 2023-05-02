import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { Meme } from "../meme/meme.model";
import { MemeApiResponse } from "../api/meme-api.model";

@Injectable({ providedIn: "root" })
export class MemeService {
  constructor(private http: HttpClient) {}

  getMeme(): Observable<Meme> {
    return this.http
      .get<MemeApiResponse>("https://meme-api.com/gimme/wholesomememes")
      .pipe(
        map((meme) => {
          if (meme) {
            return {
              id: meme.ups,
              url: meme.url,
              title: meme.title,
              postLink: meme.postLink,
              subreddit: meme.subreddit,
            } as Meme;
          }
          throw new Error("no meme");
        })
      );
  }
}
