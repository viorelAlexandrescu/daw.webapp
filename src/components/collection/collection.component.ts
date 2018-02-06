import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private movies: Movie[];
  constructor(private coll: CollectionService) { }

  ngOnInit() {
    this.coll.getAllMovies()
             .subscribe(movies => this.movies = movies);
  }

}
