import { __Pagination, __Response } from './general';
import { __Tokens, __AuthStatus, __UserData } from './register';
import { __ReduxAction, __ReduxState } from './redux';

export interface ReduxAction extends __ReduxAction {}
export interface ReduxState extends __ReduxState {}
export interface Tokens extends __Tokens {}
export interface UserData extends __UserData {}
export interface Pagination<T> extends __Pagination<T> {}
export interface Response<T> extends __Response<T> {}
export { __AuthStatus as AuthStatus };
