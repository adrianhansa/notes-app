import {
  ADD_NOTE_FAIL,
  ADD_NOTE_REQUEST,
  ADD_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  GET_NOTES_FAIL,
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
  GET_NOTE_FAIL,
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
} from "../constants/noteContants";

export const noteReducer = (state = { note: {} }, action) => {
  switch (action.type) {
    case ADD_NOTE_REQUEST:
      return { loading: true };
    case ADD_NOTE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case ADD_NOTE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_NOTE_REQUEST:
      return { loading: true };
    case GET_NOTE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case GET_NOTE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case UPDATE_NOTE_REQUEST:
      return { loading: true };
    case UPDATE_NOTE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case UPDATE_NOTE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_NOTE_REQUEST:
      return { loading: true };
    case DELETE_NOTE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case DELETE_NOTE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const notesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case GET_NOTES_REQUEST:
      return { loading: true };
    case GET_NOTES_SUCCESS:
      return { loading: false, success: true, notes: action.payload };
    case GET_NOTES_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
