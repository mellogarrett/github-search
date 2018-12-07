import { ActionTypes, ActionsUnion } from "./search.actions";

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
