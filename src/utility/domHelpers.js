import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

/**
 * @description This method is used to return the size of an element and its position relative to the viewport.
 * @param id Any valid DOM element ID
 * @returns Object {"x":256,"y":210,"width":62,"height":40,"top":210,"right":318,"bottom":250,"left":256}
 */
export const getBounds = id => {
  return document.getElementById(id).getBoundingClientRect();
};

/**
 * @description This method returns the height of the event container.
 * @param fromTop Top offset of source element
 * @param toTop Top offset of destination container
 */
export const getMaxEventBoxHeight = (fromTop, toTop) => {
  return Math.floor(Math.abs(fromTop - toTop));
};

export const findBulkLabelOffset = timeLabel => {
  let timeLabelData = [];
};

export const getWeekDaysCollection = startDate => {
  let startOfWeek = moment(startDate, "YYYY-MM-DD")
    .startOf("isoWeek")
    .isoWeekday(1);
  let endOfWeek = moment(startDate, "YYYY-MM-DD").endOf("isoWeek");
  let days = [];
  let day = startOfWeek;
  while (day <= endOfWeek) {
    days.push({
      date: day.format("DD"),
      day: day.format("dddd").substr(0, 3),
      data: [],
      raw: day.toDate()
    });
    day = day.clone().add(1, "d");
  }
  return days;
};
