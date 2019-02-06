import { timeLabel, weekData } from "../../components/calendar/mockData.js";
import { FIND_WEEK_RANGE } from "../actions/calendarDataAction";
import { ADD_EVENT_DATA, DELETE_EVENT_DATA } from "../actions/eventFormAction";
import { getWeekDaysCollection, uniqBy } from "../../utility/domHelpers";
import { getTodaysDate, has } from "../../utility/domHelpers";

const today = getTodaysDate();
const initWeekData = getWeekDaysCollection(today);

const initialState = {
  timeLabel: timeLabel,
  weekData: initWeekData.weekData,
  startOfWeek: null,
  endOfWeek: null,
  master: Object.assign(
    {},
    {
      [initWeekData.weekNumber]: initWeekData.weekData
    }
  ),
  days: initWeekData.days,
  weekNumber: initWeekData.weekNumber
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT_DATA: {
      let { date, from, to, fromOffset, toOffset, title, id } = action.payload,
        _week = state.weekData[date],
        _eventData = [
          ..._week.data[from.hours].filter(c => c.id !== id),
          {
            title,
            fromOffset,
            toOffset,
            from,
            to,
            id
          }
        ];

      let _weekData = Object.assign({}, state.weekData, {
        [date]: Object.assign({}, _week, {
          data: Object.assign({}, _week.data, {
            [from.hours]: _eventData
          })
        })
      });
      return Object.assign({}, state, {
        weekData: _weekData,
        master: Object.assign({}, state.master, {
          [state.weekNumber]: _weekData
        })
      });
    }
    case DELETE_EVENT_DATA: {
      let { date, from, to, fromOffset, toOffset, title, id } = action.payload,
        _week = state.weekData[date];

      let _weekData = Object.assign({}, state.weekData, {
        [date]: Object.assign({}, _week, {
          data: Object.assign({}, _week.data, {
            [from.hours]: [..._week.data[from.hours].filter(c => c.id !== id)]
          })
        })
      });
      return Object.assign({}, state, {
        weekData: _weekData,
        master: Object.assign({}, state.master, {
          [state.weekNumber]: _weekData
        })
      });
    }
    case FIND_WEEK_RANGE: {
      let weekData = has(state.master, action.payload.weekNumber)
        ? state.master[action.payload.weekNumber]
        : action.payload.weekData;
      return Object.assign({}, state, {
        days: action.payload.days,
        weekData: weekData,
        master: Object.assign({}, state.master, {
          [action.payload.weekNumber]: weekData
        }),
        weekNumber: action.payload.weekNumber
      });
    }
    default:
      return state;
  }
}
