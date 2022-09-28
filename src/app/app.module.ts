import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeetupsComponent } from './pages/meetups/meetups.component';
import { UsersComponent } from './pages/users/users.component';
import { MeetupComponent } from './pages/meetup/meetup.component';
import { UserComponent } from './entities/user/user.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MeetupPageComponent } from './meetup-page/meetup-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { MyMeetupsComponent } from './pages/my-meetups/my-meetups/my-meetups.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupCardComponent,
    NavbarComponent,
    MeetupsComponent,
    UsersComponent,
    MeetupComponent,
    UserComponent,
    AuthPageComponent,
    MeetupPageComponent,
    UsersPageComponent,
    MyMeetupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
