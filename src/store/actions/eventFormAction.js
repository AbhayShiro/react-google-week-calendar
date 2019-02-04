export const FORM_MODAL_OPEN = "FORM_MODAL_OPEN";
export const FORM_MODAL_CLOSE = "FORM_MODAL_CLOSE";
export const ADD_EVENT_DATA = "ADD_EVENT_DATA";
export const DELETE_EVENT_DATA = "DELETE_EVENT_DATA";
export const EDIT_EVENT_DATA = "EDIT_EVENT_DATA";

export const formModalClose = () => {
  return {
    type: FORM_MODAL_CLOSE
  };
};

export const formModalOpen = () => {
  return {
    type: FORM_MODAL_OPEN
  };
};

export const addEventData = data => {
  return {
    type: ADD_EVENT_DATA,
    payload: data
  };
};

export const deleteEventData = data => {
  return {
    type: DELETE_EVENT_DATA,
    payload: data
  };
};

export const editEventData = data => {
  return {
    type: EDIT_EVENT_DATA,
    payload: data
  };
};