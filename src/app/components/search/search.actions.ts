import { Action } from "@ngrx/store";

export enum ActionTypes {
  SetSearchResults = "[Search Component] SetSearchResult"
}

export class SetSearchResults implements Action {
  readonly type = ActionTypes.SetSearchResults;

  constructor(public payload: RepositorySearchResponse) {}
}

export class RepositorySearchResponse {
  incomplete_results: boolean;
  items: Array<RepositorySearchResponseItem>;
  total_count: number;
}

export class RepositorySearchResponseItem {
  id: number;
  full_name: string;
  owner: Owner;
  language: string;
}

export class Owner {
  id: number;
  login: string;
  url: string;
}

export type ActionsUnion = SetSearchResults;
