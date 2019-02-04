import { TARGET_DATE_SELECTED } from "../actions/boxCalendarActions";

import { getTodaysDate } from "../../utility/domHelpers";

const today = getTodaysDate();

const initialState = {
  targetDate: today
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TARGET_DATE_SELECTED:
      return Object.assign({}, state, {
        targetDate: action.payload
      });
    default:
      return state;
  }
}
