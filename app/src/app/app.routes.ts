import { Routes } from '@angular/router';
import { MyListComponent } from './views/my-list/my-list.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { SeriesComponent } from './views/series/series.component';
import { MoviesComponent } from './views/movies/movies.component';
import { DetailComponent } from './components/detail/detail.component';
import { routesGuard } from './core/guards/routes.guard';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'init', pathMatch: 'full' },
  { path: 'init', component: InicioComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'myList', component: MyListComponent, canActivate: [routesGuard] },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent },
];
