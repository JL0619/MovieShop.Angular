import { Component, OnInit } from '@angular/core';
import { Genre } from '../Shared/Models/genre';
import { GenresService } from '../Core/Services/genres.service';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  public genres: Genre[];

  // constructor should not have logical, logic inside ngOnInit
  constructor(private genreService: GenresService) { }

  // Every angular would go through angular life cycle hooks
  ngOnInit() {
    console.log('debugging point 1');
    this.genreService.GetAllGenres().subscribe(
      g => {
        this.genres = g;
        console.log('Inside  genres');
        console.log(this.genres);
      }
    );

  }
}
