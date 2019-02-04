import {
  FORM_MODAL_OPEN,
  FORM_MODAL_CLOSE,
  ADD_EVENT_DATA,
  DELETE_EVENT_DATA,
  EDIT_EVENT_DATA
} from "../actions/eventFormAction";

const initialState = {
  isModalOpen: false,
  currentData: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FORM_MODAL_OPEN:
      return Object.assign({}, state, {
        isModalOpen: true
      });
    case FORM_MODAL_CLOSE:
      return Object.assign({}, state, {
        isModalOpen: false
      });
    default:
      return state;
  }
}
