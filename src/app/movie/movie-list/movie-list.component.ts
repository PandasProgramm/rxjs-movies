import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie/Movie';
import {NavbarService} from '../../navbar/navbar.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations:[
    trigger('listAnimation',[
      transition('*<=>*',[
        query(':enter',[
          style({opacity:0,transform:'translateY(-59px)'}),
          stagger(
            '50ms',
            animate('500ms ease-in',
              style({opacity: 1, transform:'translateY(0px)'})
            )
          )
        ],
          {optional:true},
          ),
          query(':leave',
            [
              animate('500ms',
                style(
                  {opacity:0,transform:'rotate(90deg)'}
                  ))
            ],
          )
      ])
    ])
  ]
})

export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;
  loadingMovies:number[];
  constructor(private movieService: MoviesService,private navbarService:NavbarService) { }

  ngOnInit(): void {
    this.loadingMovies= new Array(10).fill(0).map((n,index)=>index)
    this.movies$= this.movieService.getMoviesFromServer()
    this.navbarService.title.next("Home")
  }
}
