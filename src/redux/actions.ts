import { AuthStatus, ReduxAction } from '../interface';

const AUTH_STATUS = 'AUTH_STATUS';
const setAuthStatus = (payload: AuthStatus): ReduxAction => ({
    type: AUTH_STATUS,
    payload: payload,
});
export { AUTH_STATUS, setAuthStatus };

const USER_DATA = 'USER_DATA';
const setUserData = (payload: any): ReduxAction => ({ type: USER_DATA, payload: payload });
export { USER_DATA, setUserData };

const CONFIG_DATA = 'CONFIG_DATA';
const setConfigData = (payload: any): ReduxAction => ({ type: CONFIG_DATA, payload: payload });
export { CONFIG_DATA, setConfigData };
