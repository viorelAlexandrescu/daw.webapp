import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class NomenclatorService {
    constructor(private _http: Http) {}

    getLanguages(): Promise<any> {
        const url = 'api/language';
        return this._http.get(url).toPromise();
    }

    getAwards(): Promise<any> {
        const url = 'api/award';
        return this._http.get(url).toPromise();
    }

    getGenres(): Promise<any> {
        const url = 'api/genre';
        return this._http.get(url).toPromise();
    }

    getActors(): Promise<any> {
        const url = 'api/actor';
        return this._http.get(url).toPromise();
    }

}