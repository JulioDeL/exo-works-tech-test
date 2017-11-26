import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommentsComponent} from './comments/comments.component';
import {ConsultantsComponent} from './consultants/consultants.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/consultants', pathMatch: 'full'},
    {path: 'consultants', component: ConsultantsComponent },
    {path: 'comments/:id', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
