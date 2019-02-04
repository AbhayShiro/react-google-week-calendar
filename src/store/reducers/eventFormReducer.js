import {
  LOG_EVENT_DATE_TIME,
  FORM_MODAL_OPEN,
  FORM_MODAL_CLOSE,
  ADD_EVENT_DATA,
  DELETE_EVENT_DATA,
  EDIT_EVENT_DATA
} from "../actions/eventFormAction";

const initialState = {
  isModalOpen: false,
  currentData: null,
  activeTile: null,
  from: null,
  to: null,
  date: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_EVENT_DATE_TIME:
      return Object.assign({}, state, {
        from: action.payload.from,
        to: action.payload.to,
        date: action.payload.date
      });
    case FORM_MODAL_OPEN:
      return Object.assign({}, state, {
        isModalOpen: true,
        activeTile: Object.assign({}, state.activeTile, action.payload)
      });
    case FORM_MODAL_CLOSE:
      return Object.assign({}, state, {
        isModalOpen: false
      });
    default:
      return state;
  }
}
