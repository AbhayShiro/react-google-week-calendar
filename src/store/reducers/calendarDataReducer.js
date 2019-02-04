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
    case "ADD_EVENT_DATA": {
      let { date, from, to, fromOffset, toOffset, title } = action.payload,
        _week = state.weekData[date],
        _weekData = Object.assign({}, state.weekData, {
          [date]: Object.assign({}, _week, {
            data: Object.assign({}, _week.data, {
              [from.hours]: [
                ..._week.data[from.hours],
                {
                  title,
                  fromOffset,
                  toOffset,
                  from,
                  to
                }
              ]
            })
          })
        });
      console.log("hit the road jack", date, _week);

      return Object.assign({}, state, {
        weekData: _weekData,
        master: Object.assign({}, state.master, _weekData)
      });
    }
    case FIND_WEEK_RANGE:
      return Object.assign({}, state, {
        days: action.payload.days,
        weekData: action.payload.weekData,
        master: Object.assign({}, state.master, action.payload.weekData)
      });
    default:
      return state;
  }
}
