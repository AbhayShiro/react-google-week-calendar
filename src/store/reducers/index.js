import { combineReducers } from "redux";

import BoxCalendarReducer from "./boxCalendarReducer";
import CalendarDataReducer from "./calendarDataReducer";
import EventFormReducer from "./eventFormReducer";

export default combineReducers({
  boxCalendar: BoxCalendarReducer,
  calendarData: CalendarDataReducer,
  eventForm: EventFormReducer
});
