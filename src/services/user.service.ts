import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    private url = 'api/user';

    // Resolve HTTP using the constructor
    constructor(private _http: Http) { }

    updateUser(id, user): Observable<any> {
        return this._http.put(this.url + '/' + id, user).map((response: Response) => {
            return response.text();
        });
    }

    getWatchlist(id): Observable<any> {
        return this._http.get(this.url + '/watchlist/' + id).map((response: Response) => {
            return response.text();
        });
    }

    createUser(user): Observable<any> {
        return this._http.post(this.url, user).map((response: Response) => {
            return response.text();
        });
    }
}
