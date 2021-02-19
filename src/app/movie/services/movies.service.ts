import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Movie, movies} from '../../models/movie/Movie';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private ROOT_URL = 'http://localhost:3000/movies'
  constructor(private httpClient:HttpClient) {}

  getMoviesFromServer():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.ROOT_URL).pipe(this.addDelay)
  }
  movieFromHttp(id:number){
    return this.httpClient.get<Movie>(`${this.ROOT_URL}/${id}`)
  }
  addMovieByHttp(movie:Movie){
    return this.httpClient.post(this.ROOT_URL,movie);
  }
  editMovieByHttp(movie:Movie){
    return this.httpClient.put(this.ROOT_URL,movie)
  }
  deleteMovieByHttp(id:number){
    return this.httpClient.delete(`${this.ROOT_URL}/${id}`)
  }
  addDelay(obs:Observable<any>){
    return obs.pipe(delay(1000));
  }


  getMovies(){
    return of(movies);
  }
  getMovie(id:number):Observable<Movie>{
    return of(
        movies.find(movie=> +movie.id===+id)
    )
  }
}
