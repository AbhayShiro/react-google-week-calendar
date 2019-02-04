import { combineReducers } from "redux";

import BoxCalendarReducer from "./boxCalendarReducer";

export default combineReducers({
  boxCalendar: BoxCalendarReducer
});
