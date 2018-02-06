import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../../models/Movie';
import { CollectionService } from '../../services/collection.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    latestMovies: Movie[];

    constructor(private coll: CollectionService){
        this.coll.getLatestMovies()
                 .subscribe(latest => this.latestMovies = latest);
    }
}
