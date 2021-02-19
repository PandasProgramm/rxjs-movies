import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Movie} from '../../models/movie/Movie';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NavbarService} from '../../navbar/navbar.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit,OnDestroy {

  $movieIdSubscription:Subscription
  $movieSubscription  :Subscription

  id:number;
  movie: Movie;


  constructor(private movieService:MoviesService,private activatedRoute:ActivatedRoute,private navbarService:NavbarService) { }

  /**
   * activated route listen for url changes in optional parameters
   */
  ngOnInit(): void {
      this.$movieIdSubscription= this.activatedRoute.params.subscribe(
        (movie)=> this.id= +movie['id']
      )
    /*  this.$movieSubscription= this.movieService.getMovie(this.id).subscribe(movie=>{
        this.movie=movie;
        this.navbarService.title.next(movie.name)
      })*/
      this.$movieSubscription= this.movieService.movieFromHttp(this.id).subscribe(movie=>{
        this.movie=movie;
        this.navbarService.title.next(movie.name);
      })

  }


  ngOnDestroy(): void {
    this.$movieIdSubscription&&this.$movieIdSubscription.unsubscribe();
    this.$movieSubscription&&this.$movieSubscription.unsubscribe();
  }


}
