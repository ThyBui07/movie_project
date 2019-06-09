import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
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
import { LoginFormComponent } from './components/header/login-form/login-form.component';
import { SignupFormComponent } from './components/header/signup-form/signup-form.component';

/* Admin components */
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { BreadcrumbComponent } from './components/admin/breadcrumb/breadcrumb.component';
import { ToolbarComponent } from './components/admin/toolbar/toolbar.component';
import { LogoutModalComponent } from './components/admin/logout-modal/logout-modal.component';
import { AdminFooterComponent } from './components/admin/admin-footer/admin-footer.component';
import { AdminMovieFormComponent } from './components/admin/admin-movie-form/admin-movie-form.component';
import { AdminUserFormComponent } from './components/admin/admin-user-form/admin-user-form.component';

/* Admin views */
import { AdminHomeComponent} from './views/admin/home/home.component';
import { AdminMoviesComponent } from './views/admin/admin-movies/admin-movies.component';
import { AdminMovieEditComponent } from './views/admin/admin-movie-edit/admin-movie-edit.component';
import { AdminMovieCreateComponent } from './views/admin/admin-movie-create/admin-movie-create.component';
import { AdminUsersComponent } from './views/admin/admin-users/admin-users.component';
import { AdminUserCreateComponent } from './views/admin/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './views/admin/admin-user-edit/admin-user-edit.component';

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
    LoginFormComponent,
    SignupFormComponent,

    /* Admin components */
    NavbarComponent,
    BreadcrumbComponent,
    ToolbarComponent,
    LogoutModalComponent,
    AdminFooterComponent,
    AdminMovieFormComponent,
    AdminUserFormComponent,

    /* Admin views */
    AdminHomeComponent,
    AdminMoviesComponent,
    AdminMovieEditComponent,
    AdminMovieCreateComponent,
    AdminUsersComponent,
    AdminUserCreateComponent,
    AdminUserEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
