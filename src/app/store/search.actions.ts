import { Action } from "@ngrx/store";
import { RepositorySearchResponse } from "../models";

export enum ActionTypes {
  SetSearchResults = "[Search Component] SetSearchResult"
}

export class SetSearchResults implements Action {
  readonly type = ActionTypes.SetSearchResults;

  constructor(public payload: RepositorySearchResponse) {}
}

export type ActionsUnion = SetSearchResults;
