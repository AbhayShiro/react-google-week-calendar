import { getWeekDaysCollection } from "../../utility/domHelpers";

export const FIND_WEEK_RANGE = "FIND_WEEK_RANGE";

export const findWeekRange = selectedDate => {
  let daysRange = getWeekDaysCollection(selectedDate);
  return {
    type: FIND_WEEK_RANGE,
    payload: daysRange
  };
};
