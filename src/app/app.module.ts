import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import { MeetupsComponent } from './pages/meetups/meetups.component';
import { MyMeetupsComponent } from './pages/my-meetups/my-meetups.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { MeetupCreatingComponent } from './pages/meetup-creating/meetup-creating.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { MeetupCreatingPageComponent } from './pages/meetup-creating-page/meetup-creating-page.component';
import { MeetupEditingPageComponent } from './pages/meetup-editing-page/meetup-editing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MeetupCardComponent,
    MeetupsComponent,
    MyMeetupsComponent,
    AuthPageComponent,
    HeaderComponent,
    UsersPageComponent,
    UserCardComponent,
    MeetupCreatingComponent,
    SearchComponent,
    MeetupCreatingPageComponent,
    MeetupEditingPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     MatExpansionModule,
     MatTabsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
