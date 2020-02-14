import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopPageComponent } from 'src/app/components/top-page/top-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full'},
	{ path: 'top', component: TopPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
