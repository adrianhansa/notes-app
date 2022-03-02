import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { noteReducer, notesReducer } from "./reducers/noteReducers";

const rootReducer = combineReducers({
  noteDetails: noteReducer,
  noteList: notesReducer,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, middleware);

export default store;
