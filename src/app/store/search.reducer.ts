import { ActionTypes, ActionsUnion } from "./search.actions";
import { RepositorySearchResponse } from "../models";

export interface SearchState {
  searchResults: RepositorySearchResponse | undefined;
}

export const initialState = {
  searchResults: undefined
};

export function SearchReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.SetSearchResults:
      return { ...state, searchResults: action.payload };

    default:
      return state;
  }
}
