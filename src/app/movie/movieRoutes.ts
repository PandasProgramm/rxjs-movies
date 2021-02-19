import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {AddMovieComponent} from './add-movie/add-movie.component';

const routes:Routes=[
  {
    path:'',
    component: MovieListComponent
  },
  {
    path:'add',
    component:AddMovieComponent
  },
  {
    path:':id',
    component: MovieDetailsComponent,
  },

]
export const movieRoutes= RouterModule.forChild(routes)
