import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { RepositorySearchResponseItem } from "../../../models";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"]
})
export class SearchResultComponent implements OnInit {
  repoNames$: Observable<string[]>;

  constructor(private readonly store: Store<{}>) {
    this.repoNames$ = store.pipe(
      select("search"),
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
}
