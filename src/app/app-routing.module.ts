import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'roadmap', component: RoadmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
