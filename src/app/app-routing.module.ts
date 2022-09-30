import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { IsAdminGuard } from "./shared/guards/is-admin.guard";
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MeetupsComponent } from "./pages/meetups/meetups.component"
import { MyMeetupsComponent } from "./pages/my-meetups/my-meetups.component"
import { UsersPageComponent } from "./pages/users-page/users-page.component";

const routes: Routes = [
  {path: 'auth', component: AuthPageComponent},
  {path: 'meetups', component: MeetupsComponent}, 
  {path: 'my-meetups', component: MyMeetupsComponent},
  {path: 'users', component: UsersPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [AuthGuard, IsAdminGuard],

})
export class AppRoutingModule { 
}
