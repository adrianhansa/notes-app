import axios from "axios";
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

export const addNote = ({ title, description }) => async (dispatch) => {
  try {
    dispatch({ type: ADD_NOTE_REQUEST });
    const { data } = await axios.post("http://localhost:3000/api/notes", {
      title,
      description,
    });
    dispatch({ type: ADD_NOTE_SUCCESS, payload: data });
    const result = await axios.get(`http://localhost:3000/api/notes`);
    dispatch({ type: GET_NOTES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: ADD_NOTE_FAIL,
      payload:
        error.response.data.message && error.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getNote = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_NOTE_REQUEST });
    const { data } = await axios.get(`http://localhost:3000/api/notes/${id}`);
    dispatch({ type: GET_NOTE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_NOTE_FAIL,
      payload:
        error.response.data.message && error.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateNote = (id, { title, description }) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_NOTE_REQUEST });
    const { data } = await axios.put(`http://localhost:3000/api/notes/${id}`, {
      title,
      description,
    });
    dispatch({ type: UPDATE_NOTE_SUCCESS, payload: data });
    const result = await axios.get(`http://localhost:3000/api/notes`);
    dispatch({ type: GET_NOTES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: UPDATE_NOTE_FAIL,
      payload:
        error.response.data.message && error.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getNotes = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NOTES_REQUEST });
    const { data } = await axios.get(`http://localhost:3000/api/notes`);
    dispatch({ type: GET_NOTES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_NOTES_FAIL,
      payload:
        error.response.data.message && error.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_NOTE_REQUEST });
    const { data } = await axios.delete(
      `http://localhost:3000/api/notes/${id}`
    );
    dispatch({ type: DELETE_NOTE_SUCCESS, payload: data });
    const result = await axios.get(`http://localhost:3000/api/notes`);
    dispatch({ type: GET_NOTES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: DELETE_NOTE_FAIL,
      payload:
        error.response.data.message && error.message
          ? error.response.data.message
          : error.message,
    });
  }
};
