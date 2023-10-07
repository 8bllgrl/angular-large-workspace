import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToppartComponent } from './components/toppart/toppart.component';
import { GallgallComponent } from './components/gallgall/gallgall.component';

const routes: Routes = [
  { path: 'profile/:username', component: ToppartComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
