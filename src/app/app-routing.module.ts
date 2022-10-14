import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
//import { IsAdminGuard } from "./shared/guards/is-admin.guard";
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MeetupsComponent } from "./pages/meetups/meetups.component"
import { MyMeetupsComponent } from "./pages/my-meetups/my-meetups.component"
import { UsersPageComponent } from "./pages/users-page/users-page.component";
import { MeetupCreatingComponent } from './pages/meetup-creating/meetup-creating.component';
import { MeetupCreatingPageComponent } from "./pages/meetup-creating-page/meetup-creating-page.component";
import { MeetupEditingPageComponent } from "./pages/meetup-editing-page/meetup-editing-page.component";

const routes: Routes = [
  {path: '',   redirectTo: '/auth', pathMatch: 'full' },
  {path: 'auth', component: AuthPageComponent},
  {path: 'meetups', component: MeetupsComponent}, 
  {path: 'my-meetups', component: MyMeetupsComponent},
  {path: 'users', component: UsersPageComponent},
  {path: 'meetup-creating', component: MeetupCreatingComponent},
  {path: 'creating', component: MeetupCreatingPageComponent},
  {path: 'meetups/edit/:id', component: MeetupEditingPageComponent, canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [AuthGuard],

})
export class AppRoutingModule { 
}
