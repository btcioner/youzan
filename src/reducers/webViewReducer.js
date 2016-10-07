/**
 * Created by ralap on 16-10-6.
 */
import * as types from '../libs/ActionTypes';

const defaultState = {
    url: ''
};

export default function webViewReducer(state = defaultState, action = {}) {
    switch (action.type) {
        case types.GET_URL:
            return Object.assign({}, state, {
                getUrl: url
            });
        default:
            return state;
    }
};
