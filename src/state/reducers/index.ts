import { combineReducers } from "redux";
import respositoriesReducer from "./respositoriesReducer";

const reducers = combineReducers({
  respositories: respositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
