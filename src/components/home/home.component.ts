import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../../models/Movie';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    latestMovies: Movie[];
}
