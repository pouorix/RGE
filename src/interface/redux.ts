import { __AuthStatus } from './register';
import { Config, UserData } from './index';
export interface __ReduxAction {
    type: string;
    payload: any;
}

export interface __ReduxState {
    authStatus: __AuthStatus;
    userData: UserData | null;
    configData: Config | null;
}
