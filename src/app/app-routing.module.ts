import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { NewsComponent } from './views/news/news.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { BookingComponent } from './views/booking/booking.component';
import { FormComponent } from './views/form/form.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';

import { AdminHomeComponent } from './views/admin/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'news', component: NewsComponent},
  { path: 'booking/:id', component: BookingComponent},
  { path: 'login', component: FormComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'admin/home', component: AdminHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
