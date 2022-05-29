import { AUTH_STATUS, CONFIG_DATA, USER_DATA } from './actions';
import { AuthStatus, ReduxAction, ReduxState } from '../interface';

export const initial_state: ReduxState = {
    authStatus: AuthStatus.pending,
    userData: null,
    configData: null,
};

function reducer(state: ReduxState = initial_state, action: ReduxAction): ReduxState {
    switch (action.type) {
        case AUTH_STATUS:
            return { ...state, authStatus: action.payload };
        case USER_DATA:
            return { ...state, userData: action.payload };
        case CONFIG_DATA:
            return { ...state, configData: action.payload };
        default:
            return state;
    }
}

export default reducer;
