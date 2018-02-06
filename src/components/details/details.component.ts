import { Component, Input, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { Movie } from '../../models/Movie';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() movie: Movie;

    constructor(
        private collectionService: CollectionService,
        private route: ActivatedRoute,
        private location: Location
        ) {}

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.collectionService.getMovieById(parseInt(params['id'], 10)))
            .subscribe(movie => this.movie = movie);
    }

    goBack(): void {
        this.location.back();
    }

}
