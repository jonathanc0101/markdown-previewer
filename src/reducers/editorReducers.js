import { TEXT_CHANGED } from "../constants/editorConstants";

export const editorReducer = (state, action) => {
  switch (action.type) {
    case TEXT_CHANGED:
      return {
        ...state,
        editorText: action.text,
      };
    default:
      return state;
  }
};
