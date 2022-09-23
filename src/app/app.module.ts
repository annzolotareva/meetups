import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MeetupsComponent } from './pages/meetups/meetups.component';
import { UsersComponent } from './pages/users/users.component';
import { MeetupComponent } from './pages/meetup/meetup.component';
import { UserComponent } from './entities/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupCardComponent,
    NavbarComponent,
    AuthComponent,
    MeetupsComponent,
    UsersComponent,
    MeetupComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
