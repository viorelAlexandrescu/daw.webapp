import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {
    private url = 'api/HomeController/getLatest';

    // Resolve HTTP using the constructor
    constructor(private _http: Http) { }

    getLatestMovies(): Observable<any> {
        return this._http.get(this.url).map((response: Response) => {
            return response.text();
        });
    }
}