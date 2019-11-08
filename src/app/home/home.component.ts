import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Core/Services/movie.service';
import { Movie } from '../Shared/movie';
//import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  movies: Movie[];
  constructor(private movieservices: MovieService) { }

  ngOnInit() {
    //console.log('inside ng oninit');
    this.movieservices.getTopGrossingMovies().subscribe(
      m => {
        this.movies = m;
       // console.table(this.movies);
      }
    );
  }
  buyMovie(movie: Movie) {
    console.log('inside the home component event')
    console.log(movie);
    //1:in the child component,create output decorator to emit event using eventEmit
    //for example, in child component ,we want to send data to parent component when we click on a buttom,
    //the child click method should emit data using emit method
    //
    //2:in the parent component, since output is an event,we use normal brackets to subscribe the event and the data 
    //will be inside $event
  }

}
