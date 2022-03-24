export interface __Pagination<T> {
    num_of_pages: number;
    count: number;
    data: T[];
}

export interface __Response<T> {
    data: T;
    status: number;
}
