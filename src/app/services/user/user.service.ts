import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    APIEndPoint;

    constructor(private http: HttpClient) {
        this.APIEndPoint = environment.api;
    }

    setToken(variable) {
        localStorage.setItem('token', variable);
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isLoggedIn() {
        return this.getToken() !== null;
    }

    login(data) {

        const uri = `${this.APIEndPoint}/login`;
        var HTTPOptions = {
            headers: new HttpHeaders({
                'Accept': 'text/html, application/xhtml+xml, */*',
            }),
            'responseType': 'text' as 'text'
        }
        return this.http.post(uri, data, HTTPOptions);
    }

    logout() {

        this.removeToken();
        return;
    }


}
