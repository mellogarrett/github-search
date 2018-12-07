import { ActionReducerMap } from "@ngrx/store";
import { SearchReducer, SearchState } from "./search.reducer";

export interface State {
  search: SearchState;
}

export const actionReducerMap: ActionReducerMap<State> = {
  search: SearchReducer
};
