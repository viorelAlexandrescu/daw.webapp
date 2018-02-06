import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CollectionService {
    private url = 'api/movie';

    // Resolve HTTP using the constructor
    constructor(private _http: Http) { }

    getLatestMovies(): Observable<any> {
        return this._http.get(this.url + '/latest').map((response: Response) => {
            return response.text();
        });
    }

    getAllMovies(): Observable<any> {
        return this._http.get(this.url + '/all').map((response: Response) => {
            return response.text();
        });
    }

    getMovieById(id): Observable<any> {
        return this._http.get(this.url + '/id/' + id).map((response: Response) => {
            return response.text();
        });
    }

    getMovieByGenre(id): Observable<any> {
        return this._http.get(this.url + '/genre/' + id).map((response: Response) => {
            return response.text();
        });
    }

    getMovieByLanguage(id): Observable<any> {
        return this._http.get(this.url + '/language/' + id).map((response: Response) => {
            return response.text();
        });
    }

    getMovieByActor(id): Observable<any> {
        return this._http.get(this.url + '/actor/' + id).map((response: Response) => {
            return response.text();
        });
    }

    getMovieByAward(id): Observable<any> {
        return this._http.get(this.url + '/award/' + id).map((response: Response) => {
            return response.text();
        });
    }

    getMovieByRelease(release): Observable<any> {
        return this._http.get(this.url + '/release/' + release).map((response: Response) => {
            return response.text();
        });
    }

    updateMovie(id, movie): Observable<any> {
        return this._http.put(this.url + '/' + id, movie).map((response: Response) => {
            return response.text();
        });
    }

    deleteMovie(id): Observable<any> {
        return this._http.delete(this.url + '/' + id).map((response: Response) => {
            return response.text();
        });
    }
}
