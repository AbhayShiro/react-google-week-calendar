import { timeLabel, weekData } from "../../components/calendar/mockData.js";

const initialState = {
  timeLabel: timeLabel,
  weekData: weekData
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
