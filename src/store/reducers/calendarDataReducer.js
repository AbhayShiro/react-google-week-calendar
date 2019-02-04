import { timeLabel, weekData } from "../../components/calendar/mockData.js";
import { FIND_WEEK_RANGE } from "../actions/calendarDataAction";

import { getWeekDaysCollection } from "../../utility/domHelpers";
import { getTodaysDate } from "../../utility/domHelpers";

const today = getTodaysDate();
const initWeekData = getWeekDaysCollection(today);

const initialState = {
  timeLabel: timeLabel,
  weekData: initWeekData.weekData,
  startOfWeek: null,
  endOfWeek: null,
  master: Object.assign({}, initWeekData.weekData),
  days: initWeekData.days
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FIND_WEEK_RANGE:
      return Object.assign({}, state, {
        days: action.payload.days,
        weekData: action.payload.weekData
      });
    default:
      return state;
  }
}
