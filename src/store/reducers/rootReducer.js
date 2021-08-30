import { combineReducers } from "redux";
import storiesReducer from "./storiesReducer";
import notStartedReducer from './notStartedReducer';
import inProgressReducer from "./inProgressReducer";
import doneReducer from "./doneReducer";

const rootReducer = combineReducers({
    stories: storiesReducer,
    notStarted: notStartedReducer,
    inProgress: inProgressReducer,
    done: doneReducer,
});

export default rootReducer;