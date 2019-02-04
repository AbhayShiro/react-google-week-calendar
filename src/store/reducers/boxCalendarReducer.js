import { TARGET_DATE_SELECTED } from "../actions/boxCalendarActions";

const initialState = {
  targetDate: null
};

export default function(state, action) {
  switch (action.type) {
    case TARGET_DATE_SELECTED:
      return Object.assign({}, state, {
        targetDate: action.payload
      });
    default:
      return state;
  }
}
