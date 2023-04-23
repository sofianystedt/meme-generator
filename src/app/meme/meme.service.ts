import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Meme } from "./meme.model";
import { MemeApiResponse } from "../api/meme-api.model";

@Injectable({ providedIn: "root" })
export class MemeService {
  constructor(private http: HttpClient) {}

  getMeme(): Observable<Meme | null> {
    return this.http
      .get<MemeApiResponse>("https://meme-api.com/gimme/wholesomememes")
      .pipe(
        map((meme) =>
          meme
            ? ({ id: meme.postLink, url: meme.url, title: meme.title } as Meme)
            : null
        )
      );
  }
}
