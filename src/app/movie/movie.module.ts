import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import {movieRoutes} from './movieRoutes';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent, MovieComponent, AddMovieComponent],
  imports: [
    CommonModule,
    movieRoutes,
    ReactiveFormsModule,
  ]
})
export class MovieModule { }
