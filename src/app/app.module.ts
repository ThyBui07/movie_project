import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { SubHeadingComponent } from './components/sub-heading/sub-heading.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { NewsComponent } from './views/news/news.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { BookingComponent } from './views/booking/booking.component';
import { MovieSeatComponent } from './components/movie-seat/movie-seat.component';
import { AdminComponent } from './views/admin/admin.component';
import { FormComponent } from './views/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SubHeadingComponent,
    BreadCrumbComponent,
    NewsComponent,
    MovieCardComponent,
    MovieDetailComponent,
    BookingComponent,
    MovieSeatComponent,
    AdminComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
