import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { NewsComponent } from './views/news/news.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { BookingComponent } from './views/booking/booking.component';

import { AdminHomeComponent } from './views/admin/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [UserGuard] },
  { path: 'movies', component: MoviesComponent, canActivate: [UserGuard] },
  { path: 'movies/:id', component: MovieDetailComponent, canActivate: [UserGuard] },
  { path: 'about', component: AboutComponent, canActivate: [UserGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [UserGuard] },
  { path: 'news', component: NewsComponent, canActivate: [UserGuard] },
  { path: 'booking/:id', component: BookingComponent, canActivate: [UserGuard] },

  { path: 'admin/home', component: AdminHomeComponent, canActivate: [AdminGuard] },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
