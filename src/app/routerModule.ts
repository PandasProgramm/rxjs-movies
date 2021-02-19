import {RouterModule, Routes} from '@angular/router';


const routes: Routes =
  [
    {
    path: '',
    redirectTo:'movie',
    pathMatch:'full',
    },
    {
      path: 'movie',
      loadChildren: ()=> import('./movie/movie.module').then(m=>m.MovieModule),
    }
]
export const routerModule = RouterModule.forRoot(routes);

