import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { SearchService } from "./search.service";
import { SetSearchResults } from "../../store/search.actions";
import { RepositorySearchResponse } from "../../models";

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
    private readonly store: Store<{}>
  ) {}

  ngOnInit() {}

  search() {
    this.searchService
      .searchRepositories(this.searchString)
      .subscribe((data: RepositorySearchResponse) =>
        this.store.dispatch(new SetSearchResults(data))
      );
  }
}
