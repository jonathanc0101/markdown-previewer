import { TEXT_CHANGED } from "../constants/editorConstants";

export function changeText(text) {
  return {
    type: TEXT_CHANGED,
    text,
  };
}
