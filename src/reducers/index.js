import { combineReducers } from 'redux';
import webViewReducer from './webViewReducer';
// ... other reducers

const rootReducer = combineReducers({
    // ... other reducers
    webViewReducer
});
export default rootReducer;
