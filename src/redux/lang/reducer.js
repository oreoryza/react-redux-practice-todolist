import {LANG_EN, LANG_ID} from "./action"

const initialState = {
  lang: "EN"
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG_EN:
        return {...state, lang: "EN"}
    case LANG_ID:
        return {...state, lang: "ID"}
    default:
      return state;
  }
};

export default langReducer;
