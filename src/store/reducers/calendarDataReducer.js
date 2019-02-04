import { timeLabel, weekData } from "../../components/calendar/mockData.js";
import { FIND_WEEK_RANGE } from "../actions/calendarDataAction";

const initialState = {
  timeLabel: timeLabel,
  weekData: weekData,
  startOfWeek: null,
  endOfWeek: null,
  days: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FIND_WEEK_RANGE:
      return Object.assign({}, state, {
        days: action.payload
      });
    default:
      return state;
  }
}
