import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Middleware */
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { NewsComponent } from './views/news/news.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { BookingComponent } from './views/booking/booking.component';

/* Admin views */
import { AdminHomeComponent } from './views/admin/home/home.component';
import { AdminMoviesComponent } from './views/admin/admin-movies/admin-movies.component';
import { AdminMovieEditComponent } from './views/admin/admin-movie-edit/admin-movie-edit.component';
import { AdminMovieCreateComponent } from './views/admin/admin-movie-create/admin-movie-create.component';
import { AdminUsersComponent } from './views/admin/admin-users/admin-users.component';
import { AdminUserCreateComponent } from './views/admin/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './views/admin/admin-user-edit/admin-user-edit.component';

const routes: Routes = [
  /* User */
  { path: '', component: HomeComponent, canActivate: [UserGuard] },
  { path: 'movies', component: MoviesComponent, canActivate: [UserGuard] },
  { path: 'movies/:id', component: MovieDetailComponent, canActivate: [UserGuard] },
  { path: 'about', component: AboutComponent, canActivate: [UserGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [UserGuard] },
  { path: 'news', component: NewsComponent, canActivate: [UserGuard] },
  { path: 'booking/:id', component: BookingComponent, canActivate: [UserGuard] },

  /* Admin */
  { path: 'admin/home', component: AdminHomeComponent, canActivate: [AdminGuard] },
  { path: 'admin/movies', component: AdminMoviesComponent, canActivate: [AdminGuard] },
  { path: 'admin/movie/create', component: AdminMovieCreateComponent, canActivate: [AdminGuard] },
  { path: 'admin/movie/edit/:id', component: AdminMovieEditComponent, canActivate: [AdminGuard] },
  { path: 'admin/users', component: AdminUsersComponent, canActivate: [AdminGuard] },
  { path: 'admin/user/create', component: AdminUserCreateComponent, canActivate: [AdminGuard] },
  { path: 'admin/user/edit/:username', component: AdminUserEditComponent, canActivate: [AdminGuard] },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
