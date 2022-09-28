import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeetupsComponent } from './pages/meetups/meetups.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupCardComponent,
    NavbarComponent,
    MeetupsComponent,
    AuthPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
