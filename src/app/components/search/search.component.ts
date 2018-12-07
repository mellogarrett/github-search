import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SearchService } from "./search.service";
import {
  SetSearchResults,
  RepositorySearchResponse,
  RepositorySearchResponseItem
} from "./search.actions";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  private searchString: string = "";
  private repoNames$: Observable<string[]>;

  constructor(
    private readonly searchService: SearchService,
    private readonly store: Store<{ searchResults: object[] }>
  ) {
    this.repoNames$ = store.pipe(
      select("searchResults"),
      map(({ searchResults }) =>
        searchResults
          ? searchResults.items.map(
              (each: RepositorySearchResponseItem) => each.full_name
            )
          : undefined
      )
    );
  }

  ngOnInit() {}

  search() {
    this.searchService
      .searchRepositories(this.searchString)
      .subscribe((data: RepositorySearchResponse) =>
        this.store.dispatch(new SetSearchResults(data))
      );
  }
}
