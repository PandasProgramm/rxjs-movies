import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NavbarService} from '../../navbar/navbar.service';
import {MoviesService} from '../services/movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movieForm= new FormGroup({

    "name": new FormControl(null,[Validators.required,Validators.minLength(4)]),
    "genre": new FormControl(null,[Validators.minLength(10)]),
    "image":new FormControl(null,[Validators.required]),
    "releaseYear": new FormControl(null, [Validators.required]),
  })
  constructor(private navbarService: NavbarService,private movieService: MoviesService, private router:Router) { }

  ngOnInit(): void {
    this.navbarService.title.next("add Movie");
  }
  addMovie(){
    this.movieForm.valid&&this.movieService.addMovieByHttp(this.movieForm.value).subscribe(res=>{
      this.movieForm.reset();
      this.router.navigate(['/'])
    }

    )
  }

}
