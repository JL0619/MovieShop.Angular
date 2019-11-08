import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Shared/movie';
import { MovieService } from 'src/app/Core/Services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  id:number;
  userSubscription: Subscription;
  constructor(private movieservices: MovieService,  private route:ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params.id;
    // console.log(this.id);
    this.route.params.subscribe((params: Params)=>{
        this.movieservices.getMovieByGenre(params.id).subscribe(
          m => {
            this.movies = m;
          // console.table(this.movies);
          }
        );
    })
  }
  buyMovie(movie: Movie) {
    console.log('inside the movie-list event')
    console.log(movie);
  }

}
