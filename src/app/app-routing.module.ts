import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {path: 'auth', component: AuthPageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [AuthGuard],

})
export class AppRoutingModule { 
}
