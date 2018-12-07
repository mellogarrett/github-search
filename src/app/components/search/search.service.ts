import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class SearchService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.githubApiUrl;
  }

  searchRepositories(searchString) {
    return this.http.get(
      `${this.url}/search/repositories?q=${searchString}&page=1&per_page=10`
    );
  }
}
