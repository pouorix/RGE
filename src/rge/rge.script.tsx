import { get, responseValidator } from '../scripts/api';
import { AuthStatus, UserData } from '../interface';
import { Dispatch } from 'react';
import { setAuthStatus, setUserData } from '../redux/actions';
import { AnyAction } from 'redux';
import { authToken } from '../scripts/storage';
import { API } from '../data';

export default function RgeInit(dispatch: Dispatch<any>) {
    return getUser(dispatch);
}
const getUser = (dispatch: Dispatch<AnyAction>) => {
    return new Promise((resolve) => {
        if (!authToken.get()) {
            dispatch(setAuthStatus(AuthStatus.inValid));
            resolve(true);
        } else {
            get<UserData>(API.account.userData).then((data) => {
                if (responseValidator(data.status) && data.data) {
                    dispatch(setUserData(data.data));
                    dispatch(setAuthStatus(AuthStatus.valid));
                } else {
                    authToken.remove();
                    dispatch(setAuthStatus(AuthStatus.inValid));
                }
                resolve(true);
            });
        }
    });
};
