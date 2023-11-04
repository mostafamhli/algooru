import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTutorsComponent } from './components/our-tutors/our-tutors.component';
import { TutorDetailsComponent } from './components/tutor-details/tutor-details.component';

const routes: Routes = [
  { path: '', component: OurTutorsComponent },
  { path: 'our-tutor', component: OurTutorsComponent },
  { path: 'tutor/:id', component: TutorDetailsComponent },
  { path: '**', component: OurTutorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
