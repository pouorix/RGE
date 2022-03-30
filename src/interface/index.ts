import { __Pagination, __Response } from './general';
import { __Tokens, __AuthStatus, __UserData } from './register';
import { __ReduxAction, __ReduxState } from './redux';
import { __Award, __BlogList, __CategoryList, __Config, __History, __RecentProject, __TopBanner } from './vekalapp';

export interface ReduxAction extends __ReduxAction {}
export interface ReduxState extends __ReduxState {}
export interface Tokens extends __Tokens {}
export interface UserData extends __UserData {}
export interface Pagination<T> extends __Pagination<T> {}
export interface Response<T> extends __Response<T> {}
export interface Config extends __Config {}
export interface TopBanner extends __TopBanner {}
export interface CategoryList extends __CategoryList {}
export interface Award extends __Award {}
export interface RecentProject extends __RecentProject {}
export interface History extends __History {}
export interface BlogList extends __BlogList {}
export { __AuthStatus as AuthStatus };
