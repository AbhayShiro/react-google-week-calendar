import moment from "moment";

export const dayNameFromString = dateString => {
  let _date = moment(dateString, "YYYY-MM-DD HH:mm:ss");
  return _date.format("dddd");
};

export const timeFromString = timeString => {
  let _time = moment(timeString);
  return _time;
};

export const timeObjectFromNumber = (timeValue = null) => {
  let _timeObject =
    timeValue === null ? moment() : moment(timeValue.toString(), "LT");
  return _timeObject;
};

export const convertTo12 = hh => {
  let _hFormat = Math.abs(12 - hh);
  if (hh < 12) {
    return hh;
  }
  return _hFormat === 0 ? 12 : _hFormat;
};

export const dayOrNight = dateString => {
  let _date = moment(dateString, "YYYY-MM-DD HH:mm:ss");
  return _date.format("A");
};
