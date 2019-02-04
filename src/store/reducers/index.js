import { combineReducers } from "redux";

import BoxCalendarReducer from "./boxCalendarReducer";
import CalendarDataReducer from "./calendarDataReducer";

export default combineReducers({
  boxCalendar: BoxCalendarReducer,
  calendarData: CalendarDataReducer
});
