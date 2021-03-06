import Moment from "moment";
import { extendMoment } from "moment-range";

import { timeSlotData } from "../components/calendar/mockData";

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
  let startOfWeek = moment(startDate, "DD-MM-YYY")
      .startOf("isoWeek")
      .isoWeekday(0),
    weekNumber = moment(startDate, "DD-MM-YYY").week();
  let endOfWeek = moment(startDate, "DD-MM-YYY").endOf("week");
  let days = [];
  let weekDataObject = {};
  let day = startOfWeek;
  while (day <= endOfWeek) {
    let data = {
      date: day.format("DD"),
      day: day.format("dddd").substr(0, 3),
      data: timeSlotData,
      raw: day.format("DDMMYYYY")
    };
    days.push(data);
    weekDataObject = Object.assign({}, weekDataObject, {
      [day.format("DDMMYYYY")]: data
    });
    day = day.clone().add(1, "d");
  }
  return {
    weekData: weekDataObject,
    days: days,
    weekNumber: weekNumber
  };
};

export const getTodaysDate = () => {
  let _today = Moment().format("DD-MM-YYYY");
  return _today;
};

export const uniqBy = (arr, predicate) => {
  const cb = typeof predicate === "function" ? predicate : o => o[predicate];
  return [
    ...arr
      .reduce((map, item) => {
        const key = cb(item);
        map.has(key) || map.set(key, item);
        return map;
      }, new Map())
      .values()
  ];
};

export const has = (object, key) => {
  return object ? hasOwnProperty.call(object, key) : false;
};
