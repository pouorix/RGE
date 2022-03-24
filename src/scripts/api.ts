import { Response } from '../interface';
import { authToken } from './storage';
import ENV from '../env.json';
export const SERVER = ENV.api;

function generateHeader(object: any = {}): any {
    const header: { [k: string]: any } = {};
    if (authToken.get()) {
        header['Authorization'] = 'Token ' + authToken.get()?.access_token;
    }
    for (const key of Object.keys(object)) {
        header[key] = object[key];
    }
    return header;
}

export function del<R>(url: string, body: any): Promise<Response<R | null>> {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: generateHeader({ 'Content-Type': 'application/json' }),
        })
            .then(function (response) {
                status = response.status;
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function post<R>(url: string, body: any): Promise<Response<R | null>> {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: 'POST',
            headers: generateHeader({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(body),
        })
            .then(function (response) {
                status = response.status;
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}
export function form<R>(url: string, body: any): Promise<Response<R | null>> {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: 'POST',
            body: body,
            headers: generateHeader(),
        })
            .then(function (response) {
                status = response.status;
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function put<R>(url: string, body: any): Promise<Response<R | null>> {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: generateHeader({ 'Content-Type': 'application/json' }),
        })
            .then(function (response) {
                status = response.status;
                //console.log(response);
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function patch<R>(url: string, body: any): Promise<Response<R | null>> {
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(SERVER + url, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: generateHeader({ 'Content-Type': 'application/json' }),
        })
            .then(function (response) {
                status = response.status;
                //console.log(response);
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function get<R>(url: string, params: { [k: string]: any } = {}): Promise<Response<R | null>> {
    console.log(SERVER + url);
    const generatedUrl = new URL(SERVER + url);
    Object.keys(params).forEach((key) => {
        if (params[key] !== undefined) {
            generatedUrl.searchParams.append(key, params[key]);
        }
    });
    let status: number;
    return new Promise((resolve, reject) => {
        fetch(generatedUrl.href, {
            method: 'GET',
            headers: generateHeader({ 'Content-Type': 'application/json' }),
        })
            .then(function (response) {
                status = response.status;
                return response.json();
            })
            .then(function (data) {
                resolve({ data, status });
            })
            .catch((err) => {
                resolve({ data: null, status });
            });
    });
}

export function responseValidator(response: number): boolean {
    return response >= 200 && response < 300;
}

export function upload(URL: string, formData: any, onProgress: (progress: number) => void) {
    let abort: any;
    const promise = new Promise((resolve) => {
        const request = new XMLHttpRequest();
        abort = request.abort;
        request.onload = function () {
            if (request.readyState == XMLHttpRequest.DONE)
                resolve({ status: request.status, data: JSON.parse(request.responseText) });
            else resolve({ status: request.status, data: null });
        };
        request.upload.addEventListener('progress', function (e) {
            onProgress(e.loaded);
        });
        request.open('post', SERVER + URL);
        request.setRequestHeader('Authorization', 'jwt ' + authToken.get()?.access_token);
        request.timeout = 45000;
        request.send(formData);
    });
    return { promise, abort };
}
