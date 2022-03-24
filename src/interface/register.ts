export interface __Tokens {
    access_token: string;
    //expire_date: string;
    //refresh: string;
}

export enum __AuthStatus {
    valid = 'valid',
    pending = 'pending',
    inValid = 'inValid',
}

export interface __UserData {
    id: number;
    user_id: number;
    full_name?: string;
    username?: string;
    email?: string;
    avatar?: string;
}
